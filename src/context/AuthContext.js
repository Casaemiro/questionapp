import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext(auth)
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const changeUser = (newUser) => {
        setUser(newUser)
    }
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    const logOut = () => {
        signOut(auth)
    }
    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        recaptchaVerifier.render();
        // let appverifier = window.
        return signInWithPhoneNumber(auth, number, recaptchaVerifier).then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            console.log("user", currentUser);
            
        });
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user, setUpRecaptcha, changeUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}