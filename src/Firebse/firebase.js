/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

import {
  // getDoc,
  // doc,
  // setDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
} from "firebase/firestore";
 
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDzwx9hAZ3HJJjaIdI84Wmx9gx0lH_3t5c",
  authDomain: "botte-auth.firebaseapp.com",
  databaseURL: "https://botte-auth-default-rtdb.firebaseio.com",
  projectId: "botte-auth",
  storageBucket: "botte-auth.appspot.com",
  messagingSenderId: "1086949202479",
  appId: "1:1086949202479:web:86efcc8ad2b8a69f1444da",
  measurementId: "G-JH09LQ8QV0"    
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars
const storage = getStorage(app);


const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      console.log("userfefe", user);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
        authProvider: "google",
        isVerified: user.emailVerified,
      });
    }
    if (user.emailVerified) {
      sessionStorage.setItem("Auth Token", user.refreshToken);
      toast.success("You are signed in");
      setTimeout(() => {
        window.location.href = "/";
      }
      , 1000);
    }
    if (!user.emailVerified) {
      toast.error("You need to verify your email");
      //delete user from indexedDB
      window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
      await sendEmailVerification();
    }
  } catch (error) {
    console.log(error);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "email",
        email: user.email,
        isVerified: user.emailVerified,
      });
    }

    if (user.emailVerified) {
      sessionStorage.setItem("Auth Token", user.refreshToken);
      toast.success("Logged in successfully");
    }

    if (!user.emailVerified) {
      window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
      toast.error("Please verify your email");
    }

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // console.log("log", createdUser);
    if (!createdUser) {
      return null;
    } else {
      //save user to db
      await addDoc(collection(db, "users"), {
        uid: createdUser.user.uid,
        displayName: createdUser.user.displayName,
        authProvider: "email",
        email: createdUser.user.email,
        isVerified: createdUser.user.emailVerified,
        photoURL: createdUser.user.photoURL,
        createdAt: new Date(),
      });
      //send verification email
      await sendEmailVerification(auth.currentUser);
      window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
      toast.success("Account created successfully - verification email sent");
      setTimeout(() => {
        window.location.href = "/";
        toast.success("Account created successfully");
      }, 3000);
    }
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent");
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};
const logout = () => {
  signOut(auth);
  sessionStorage.removeItem("Auth Token");
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
};

const updateUser = async (data) => {
  console.log("data", data);
  data.displayName = data.firstName+" "+data.lastName;
  try {
    //if data has email remove it
    if (data.email) {
      delete data.email;
    }

    //find user in db
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log("docs", docs);
    if (docs.docs.length === 0) {
      return null;
    }
    const doc = docs.docs[0];
    console.log("dfhjjasbaascbskcbajkas", doc.ref);
    //update user in db
    await updateDoc(doc.ref, {
      ...doc.data(),
      ...data,
    });
    //update user in firebase auth
    user.displayName = data.displayName;
    user.photoURL = data.photoURL;
    user.phoneNumber = data.contact;
    
    console.log("user", user);


    toast.success("Profile updated");
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

// eslint-disable-next-line no-unused-vars
const deleteUser = async () => {
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    const doc = docs.docs[0];
    await deleteDoc(doc.ref);
    await deleteUser(auth);
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
    toast.success("Account deleted");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

// eslint-disable-next-line no-unused-vars
const getUser = async () => {
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    const doc = docs.docs[0];
    return doc.data();
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

const PostData = async (data) => {
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    //if user exists in db and not verified
    const doc = docs.docs[0];
    console.log("doc", doc);

    // if (!doc.data().isVerified) {
    //   toast.error("Please Update your profile");
    //   return null;
    // }

    // eslint-disable-next-line no-unused-vars
    await addDoc(collection(db, "posts"), {
      ...data,
      uid: user.uid,
      // displayName: doc.data().displayName,
      // photoURL: doc.data().photoURL,
      createdAt: new Date(),
    });
    toast.success("Post created");
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
  
  
}

//send msg to user
const sendMsg = async (user_id, msg) => {
  //create chat room if not exists and add msg
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    // eslint-disable-next-line no-unused-vars
    const doc = docs.docs[0];
    const q1 = query(
      collection(db, "chatrooms"),
      //where chatroom name is user_id and current user id
      where("users", "array-contains-any", [user_id, user.uid])


      
    );
    const docs1 = await getDocs(q1);
    if (docs1.docs.length === 0) {
      //create chatroom
      await addDoc(collection(db, "chatrooms"), {
        users: [user.uid, user_id],
        //push msg to chatroom msgs
        msgs: [
          {
            sender: user.uid,
            reciver : user_id,
            msg: msg,
            createdAt: new Date(),

          },
        ],

        createdAt: new Date(),
      });
      

    }
    else{
      //add msg to chatroom
      const doc1 = docs1.docs[0];
      await updateDoc(doc1.ref, {
        msgs: [
          ...doc1.data().msgs,
          {
            sender: user.uid,
            reciver : user_id,
            msg: msg,
            createdAt: new Date(),
          },
        ],
      });
    }
  

  }
  
    catch (err) {
    console.error(err);
    toast(err.message);
    }




}

//get msgs
const getMsgs = async (user_id) => {
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    // eslint-disable-next-line no-unused-vars
    const doc = docs.docs[0];
    const q1 = query(
      collection(db, "chatrooms"),
      //where chatroom name is user_id and current user id
      where("users", "array-contains-any", [user_id, user.uid])


    );

    const docs1 = await getDocs(q1);
    if (docs1.docs.length === 0) {
      return null;
    }
    const doc1 = docs1.docs[0];
    return doc1.data().msgs;
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

//get all chatrooms
const getChatrooms = async () => {
  try {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    // eslint-disable-next-line no-unused-vars
    const doc = docs.docs[0];
    const q1 = query(
      collection(db, "chatrooms"),
      //where chatroom name is user_id and current user id
      where("users", "array-contains", user.uid)


    );

    const docs1 = await getDocs(q1);
    if (docs1.docs.length === 0) {
      return null;
    }
    const chatrooms = [];
    docs1.forEach((doc1) => {
      chatrooms.push(doc1.data());
    });
    return chatrooms;
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};


//get user info by id
const getUserById = async (user_id) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user_id));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    const doc = docs.docs[0];
    return doc.data();
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};

//create a chatroom
const createChatroom = async (user_id) => {
  console.log("user_id123456", user_id);
  console.log("current id", auth.currentUser.uid);
  //if both users are same
  if (user_id === auth.currentUser.uid) {
    toast.error("You can't chat with yourself");
    return;
  }

  try {
    const user = auth.currentUser;
    const reciver = await getUserById(user_id);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return null;
    }
    // eslint-disable-next-line no-unused-vars
    const doc = docs.docs[0];
    const q1 = query(
      collection(db, "chatrooms"),
      //where chatroom name is user_id and current user id
      where("users", "array-contains", user_id && user.uid))


    const docs1 = await getDocs(q1);
    console.log("teesytdfytfyubtuyityuityut", docs1.docs)
    if (docs1.docs.length === 0) {
      console.log("create chatroom");
      //create chatroom
      await addDoc(collection(db, "chatrooms"), {
        users: [user.uid, user_id],
        id:  user.uid + user_id,
        //push msg to chatroom msgs
        msgs: [
          {
            sender: user.uid,
            reciver : user_id,
            msg: "hello",
            createdAt: new Date(),
          },

        ],
        createdAt: new Date(),
      });

    }
  } catch (err) {
    console.error(err);
    toast(err.message);
  }
};







export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  updateUser,
  PostData,
  firebaseConfig,
  storage,
  sendMsg,
  getChatrooms,
  getMsgs,
  getUserById,
  createChatroom,
};