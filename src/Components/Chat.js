import { useEffect, useRef, useState } from "react"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "../Styles/weather.css";
import "../Styles/chat.css";
import { auth } from "../Service/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';


const Chat = () =>{

    const messagesRef = firebase.firestore().collection('messages')
    const query = messagesRef.orderBy("createdAt").limitToLast(25);
    const scroll = useRef()
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [expandChat, setexpandChat] = useState(true)
    const [chatState, setchatState] = useState('hideChatComponent')
    const [messageValue, setmessageValue] = useState('')

    const handleChatBtn = (e) =>{
      e.preventDefault()
      
      if(expandChat === false){
        setexpandChat(true)
        setchatState("hideChatComponent")
      }else{
        setexpandChat(false)
        setchatState("chatComponent")
      }

    }
    
    const handleChatMessage = async (e) =>{

      e.preventDefault()
      
      const {uid, photoURL} = auth.currentUser

      if(messageValue === ""){
        alert("Esta vacio")
      }else{
        await messagesRef.add({
          text: messageValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          userName: auth.currentUser.displayName,
          uid,
          photoURL,
        })
  
        setmessageValue('')
      }


    }
    useEffect(() => {
      scroll.current.scrollIntoView({behavior:'smooth'})
    },[messages])
    
  return(
    <>
    <div className={chatState}>
      <div className="chat">
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={scroll}></span>
      </div>

      <div className="messageInput">
      <form action="" onSubmit={handleChatMessage}>
      
      <input id="messageBox" disabled={expandChat} value={messageValue} onChange={(e) => setmessageValue(e.target.value)}/>

      <button type="submit">send</button>
      
      </form>
      </div>
    </div>

      <button className="chatBtn" onClick={handleChatBtn}>Chat</button>
    </>
  )
}

  const ChatMessage = (props) =>{
    const {text, photoURL, userName} = props.message

    return(<>
      <p className="userName">{userName}</p>
      <div className="message">
      <img src={photoURL} width="50px" alt="" srcset="" />
      <p id="messagetext">{text}</p>
      </div>
    </>)

  }



export default Chat