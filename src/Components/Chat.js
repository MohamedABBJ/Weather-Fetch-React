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
    const [messages] = useCollectionData(query, {idField: "id"})

    const [expandChat, setexpandChat] = useState(false)
    const [messageValue, setmessageValue] = useState("")

    const handleChatBtn = (e) =>{
      e.preventDefault()
      
      if(expandChat === false){
        setexpandChat(true)
      }else{
        setexpandChat(false)
      }

    }

    const handleChatMessage = async (e) =>{

      e.preventDefault()
      
      const {uid, photoURL} = auth.currentUser

      await messagesRef.add({
        text: messageValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userName: auth.currentUser.displayName,
        uid,
        photoURL
      })

      setmessageValue('')

    }

    useEffect(() => {
      scroll.current.scrollIntoView({behavior:'smooth'})
    },[messages])
    

  return(
    <>
    <div className="chatComponent">
      <div className="chat">
      {messages && messages.map(msg => <ChatMessage message={msg} />)}
      <span ref={scroll}></span>
      </div>

      <div className="messageInput">
      <form action="" onSubmit={handleChatMessage}>
      
      <input id="messageBox" disabled={expandChat} value={messageValue} onChange={(e) => setmessageValue(e.target.value)}/>

      <button type="submit">send</button>
      
      </form>
      <button onClick={handleChatBtn}>Chat</button>
      </div>
    </div>

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

/*
const ChatRoom = ({user = null}) => {
  const [messages, setMessages] = useState([])

  const db = firebase.firestore()
  const query = db.collection('messages').orderBy('createdAt').limit(100);

  useEffect(() => {
    const unsubscribe = query.onSnapshot(querySnapshot =>{
      const date = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    }
      second
    }
  }, [third])
  
  return <ul></ul>
}

export default ChatRoom */