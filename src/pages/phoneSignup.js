import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const PhoneSignup = () => {
    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [use, setUse] = useState(null)
    const navigate = useNavigate()
    const { setUpRecaptcha, changeUser } = UserAuth();

    useEffect(()=>{
        if(use != null){
            console.log("phone", use);
            navigate('/questions')
            
        }
    },[use])

    const verifyOtp = (e) => {
        let top = e.target.value
        setOtp(top)
        if (top.length === 6) {
            console.log(top)
            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(top).then((result) => {
                // User signed in successfully.
                const user = result.user;
                setUse(user)
                changeUser(user)
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
        }
    }

    const handleCode = async (e) => {
        e.preventDefault();
        if (number === "" || number === undefined) {
            console.log("number", number)
        }
        try {
            console.log("Waiting for response")
            const response = await setUpRecaptcha(number).then(
                // document.querySelector('.enter').style.display = "none",
                document.querySelector('.confirm').style.display = "flex"
            )
            console.log(response)

        } catch (err) {
            console.log("err")
            console.log("number", number)

        }


    }



    return (
        <>
            <div className="login-title mb-3">
                Log In with Phone
            </div>
            <div className="signup-form row col-10 col-sm-6 col-md-5 col-lg-4 col-xxl-3 enter">
                <input type={"tel"} className="mb-3" onChange={(e) => { setNumber(e.target.value) }} />
                <div id='recaptcha-container' />
                <button onClick={handleCode}>Send Code</button>

                <div style={{ textAlign: "center" }}>Don't have an account? <a href="/signup">Sign up</a></div>

            </div>

            <div className="signup-form row col-10 col-sm-6 col-md-5 col-lg-4 col-xxl-3 confirm">
                <input type={"text"} onChange={verifyOtp} value={otp} />

                <div style={{ textAlign: "center" }}>Don't have an account? <a href="/signup">Sign up</a></div>

            </div>
        </>
    );
}

export default PhoneSignup;