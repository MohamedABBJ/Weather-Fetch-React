import { auth, provider } from "../Service/firebase"
import {useAuthState} from 'react-firebase-hooks/auth';


const Login = () =>{


    const signInWithGoogle = () =>{
        auth.signInWithPopup(provider)
    }

    return(
        <div>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}

export default Login