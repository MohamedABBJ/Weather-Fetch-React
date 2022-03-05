import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../Service/firebase';
import Chat from './Chat';
import Login from './Login.js';
import UserLoggedIn from './UserLoggedIn';


const UserState = () =>{
    const [user] = useAuthState(auth)

    return(

        user ? <><UserLoggedIn/> <Chat/></> : <Login/>
    )
}

export default UserState
