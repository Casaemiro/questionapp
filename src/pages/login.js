import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase-config'
import { useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
     const {googleSignIn, user} = UserAuth()
     const navigate  = useNavigate()

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn()
        }catch(error){
            console.log(error);
        }
    }


    useEffect(()=>{
        if(user != null){
            navigate('/questions')
        }
        
    },[user])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth(app);

    const loginBtn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("Successfully logged in")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode)
            });
    }








    return (
        <>
            <div className="login-title mb-3">
                Log In
            </div>
            <div className="signup-form row col-10 col-sm-6 col-md-5 col-lg-4 col-xxl-3">
                <div className="signup-icon">
                    <i className="fa-solid fa-unlock-keyhole fa-6x mb-3" style={{ margin: "0% auto" }}></i>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className="mt-3 w-100" onClick={loginBtn}>Log in</button>
                <div style={{ textAlign: "center" }}>Don't have an account? <a href="/signup">Sign up</a></div>
                <div><GoogleButton onClick={handleGoogleSignIn}/></div>
            </div>
            

        </>
    )
}
export default Login
