import React, { useState } from "react";
// import Img from "../img/img.png";
// import Attach from "../img/attach.png";
// import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/Chatcontext";
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
import { auth, sendMsg } from "../../../../Firebse/firebase";


const Input = () => {
  const [text, setText] = useState("");

//   const { currentUser } = useContext(AuthContext);
  const currentUser=auth.currentUser;

  const handleSend = async (e) => {
    e.preventDefault();
    // const msg =await sendMsg
    const msg = await sendMsg(currentUser.uid, text);
    console.log(msg, "msg");
    setText("");
  };
  return (
      <form>
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button type='submit' onClick={handleSend}>Send</button>
      </div>
    </div>
      </form>
  );
};

export default Input;