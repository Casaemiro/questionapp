import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext(auth)
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
const logOut = () => {
    signOut(auth)
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
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}