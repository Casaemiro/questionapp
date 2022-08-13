import './signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase-config'
import {useState} from 'react'
import GoogleButton from "react-google-button";



const Signup = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const auth = getAuth(app);

const signupBtn = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("Successfully Added user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(errorCode)
    alert(errorCode)
    // ..
  });
}


    return (
        <>
        <div className="login-title mb-3">
            Sign up
        </div>
            <div className="signup-form row col-10 col-sm-6 col-md-5 col-lg-4 col-xxl-3">
                <div className="signup-icon">
                <i className="fa-solid fa-key fa-6x mb-3" style={{ margin: "0% auto" }}></i>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" className="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" className="form-control" placeholder="example@gmail.com" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="text" className="form-control" placeholder="password..." aria-label="Username" aria-describedby="basic-addon1"  onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <button className="mt-3 w-100" onClick={signupBtn}>Sign up</button>
                <div style={{ textAlign: "center" }}>Already have an account? <a href="/login">login</a></div>

            {/* <div><GoogleButton /></div> */}
            </div>
        </>

    )
}
export default Signup
