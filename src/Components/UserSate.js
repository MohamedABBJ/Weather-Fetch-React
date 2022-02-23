import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../Service/firebase';
import Login from './Login,';
import UserLoggedIn from './UserLoggedIn';


const UserState = () =>{
    const [user] = useAuthState(auth)

    return(
        user ? <UserLoggedIn/> : <Login/>
    )
}

export default UserState
