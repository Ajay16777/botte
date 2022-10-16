import { doc, onSnapshot } from "firebase/firestore";
import React, {useEffect, useState } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/Chatcontext";
import { db,auth,getChatrooms, getUserById } from "../../../../Firebse/firebase";


const getUserById2 = async (id) => {
  const user = await getUserById(id);
  return user.displayName;
};


//function to add display name to the chatrooms
const addDisplayName = async (chatrooms) => {
  let chatroomsWithDisplayName = [];
  for (let chatroom of chatrooms) {
    if (chatroom.users[0] === auth.currentUser.uid) {
      chatroom.displayName = await getUserById2(chatroom.users[1]);
    }
    if (chatroom.users[1] === auth.currentUser.uid) {
      chatroom.displayName = await getUserById2(chatroom.users[0]);
    }
    chatroomsWithDisplayName.push(chatroom);

  }
  return chatroomsWithDisplayName;
};




const Chats = () => {
  const [chats, setChats] = useState([]);

//   const { currentUser } = useContext(AuthContext);
const currentUser=  auth.currentUser;
console.log(currentUser.uid,"currentUser");
//   const { dispatch } = useContext(ChatContext);

  useEffect(() => {
  const handleSelect = async(u) => {
    // dispatch({ type: "CHANGE_USER", payload: u });
    let ChatRooms = await getChatrooms(currentUser.uid);
    console.log(ChatRooms,"ChatRooms");
    let chatroomsWithDisplayName = await addDisplayName(ChatRooms);
    setChats(chatroomsWithDisplayName);
  };
    handleSelect();
    }, [currentUser.uid]);

    // const usrr = chats[0].users;



// 



  return (
    <div className="chats">
      {/* {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => ( */}
      {chats?.map((chat) => (
       
       <div
       
       className="userChat"
     //   key={chat[0]}
     //   onClick={() => handleSelect()}

     >
     
      
       <div className="userChatInfo">
        
       <span>
        {chat.displayName}
         </span>
        


         {/* <p>{chat.lastMessage?.text}</p>  */}
         {/* <span>devesh</span>
         <p>hello</p> */}
       </div>
     </div>


      ))}



    </div>
  );
};

export default Chats;