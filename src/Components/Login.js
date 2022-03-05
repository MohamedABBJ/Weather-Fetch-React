import { auth, provider } from "../Service/firebase"
import "../Styles/weather.css";

const Login = () =>{


    const signInWithGoogle = () =>{
        auth.signInWithPopup(provider)
    }

    return(
        <div className="signInBtn">
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}

export default Login