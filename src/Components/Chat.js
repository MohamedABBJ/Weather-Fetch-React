import { useState } from "react"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "../Styles/weather.css";


const Chat = () =>{

  return(
    <div>
      <button className="chatBtn">Chat</button>
    </div>
  )

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