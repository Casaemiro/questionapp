import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
const Navbar = () => {
    const [filt, setFilt] = useState(true)
    const {user,logOut} = UserAuth()

const handleSignOut = async () => {
    try{
        await logOut()
    }catch(error){
        console.log(error)
    }
}
// const navigate = useNavigate()
// useEffect(()=>{
//     if(user == null){
//         navigate('/login')
//     }
    
// },[user])
    return (
        <div className="nav-section">
            <div className="logo-section">
                <h1><b>Question.Ask</b></h1>
            </div>
            <div className="right-nav-section">

                <a href="/">contact</a>
                <a href="/">help</a>
                <a href="/">forum</a>
                <a href="/">profile</a>
                {user?.displayName ? <button onClick={handleSignOut} style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color:"white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>Log out</button> :<a href="/login"><button style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color:"white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>LOG IN</button></a> }
                
                
                
            </div>
            <div className="filter" onClick={() => {
                if (filt) {
                    document.querySelector('.subject-section').style.display = "flex"
                    setFilt(!filt)
                }
                if (!filt) {
                    document.querySelector('.subject-section').style.display = "none"
                    setFilt(!filt)
                }
            }}>
                <i className="fa-solid fa-filter"></i>

            </div>
            <div className="meno">
                <i className="fa-solid fa-house-user"></i>
            </div>
            <div className="men">
                <i className="fa-solid fa-bars "></i>
            </div>
        </div>
    );
}

export default Navbar;