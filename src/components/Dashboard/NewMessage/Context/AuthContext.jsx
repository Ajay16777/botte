import { createContext, useEffect, useState } from "react";
import { auth } from "../../../../Firebse/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // console.log(unSub,"fjsd");
        });
    }, []);


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};