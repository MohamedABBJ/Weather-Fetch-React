import { auth } from "../Service/firebase";
import React from "react";

const UserLoggedIn = () =>{
    const logout = () => {
        auth.signOut();
    }
      
    return (
        <>
        <div className="login">
               
            {
                "Welcome " + auth.currentUser.displayName
            }
            <button style={{"marginLeft" : "10px"}} 
            onClick={logout}>
                Logout
            </button>
        </div>
        </>
            
    );
}

export default UserLoggedIn
