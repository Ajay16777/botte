import { doc, onSnapshot, where } from "firebase/firestore";
import React, { useContext, useEffect, useState,useRef } from "react";
import { ChatContext } from "../Context/Chatcontext";
import { db,auth,getMsgs } from "../../../../Firebse/firebase";
import { query, collection, orderBy } from 'firebase/firestore';
import Message from "./Message";
import styles from "styles/commonStyles";

const Messages = () => {
    const [msg, setMsg] = useState([]);
    // const scroll = useRef();
    // // const classes = styles();
    // const User_Name = auth.currentUser.displayName;
  
  
  
    useEffect(() => {
// get the messages from the database from collection chatooms and order them by timestamp
        const q = query(collection(db, "chatrooms"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
                // console.log(doc.data().msgs,"doc.data()");
            });
            setMsg(messages);
            console.log(messages,"sdjkfsadfkja");
        });
        return unsubscribe;
    }, []);
    console.log(msg[0],"message array");
    // set the mesg.msgs to the state

    
    

    return (
    <div className="messages">
      {msg && msg.map((message) => (
        <Message key={message.id} message={message.msgs} />
      ))}
    </div>
  );
};

export default Messages;

