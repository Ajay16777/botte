import React, {  useEffect, useRef } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/Chatcontext";
import {auth } from "../../../../Firebse/firebase";

const Message = ({ message }) => {
 const style = {
  p:{
    padding: "10px 20px",
    borderRadius: "0px 10px 10px 10px",
    maxWidth: "max-content",
    backgroundColor: "#CDDEFF",
    marginTop: "10px",
  },
  sent:{
        backgroundColor: '#395dff',
        color: '#fff',
        flexDirection: 'row-reverse',
        textAlign: 'end',
        clear: 'right',
        float: 'right',
        borderRadius: '0 1rem 1rem 1rem',
      
      },
      received:{
        backgroundColor: '#e5e5ea',
        color: '#000',
        float: 'left',
        clear: 'left',
      width: '1005',
        borderRadius: '1rem 0 1rem 1rem',
      },
 }

//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

const messageClass = message.uid === auth.currentUser.uid ? `${styles.sent}`: `${styles.received}`;


const currentUser = auth.currentUser;
  return (
    <>
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
          }
          alt=""
        />
        {/* <span>just now</span> */}
      </div>

        {message&&message.map((msg) => (
      <div className="messageContent" styles={messageClass} >
          <p style={style.p}>{msg.msg}</p>
        </div>
        ))}

        {/* <p>{message.msg}</p>
        {console.log(message.msg,"message.text")}
        {message.img && <img src={message.img} alt="" />} */}
      </>
  );
};

export default Message;


    const styles  = () => ({

      
      });