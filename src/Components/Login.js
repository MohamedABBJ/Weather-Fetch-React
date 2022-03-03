import { auth, provider } from "../Service/firebase"


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