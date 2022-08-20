import { useState, useEffect } from "react";
import { UserAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ users }) => {
    const [filt, setFilt] = useState(true)
    const { logOut, user } = UserAuth()
    const admin = users.filter((elem) => elem.role === "admin").map((elem) => elem.email)
    console.log(admin);
    const handleSignOut = async () => {
        try {
            await logOut().then(console.log("logged out"))
        } catch (error) {
            console.log(error)
        }
    }
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (user == null) {
    //         navigate('/')

    //     }

    // }, [user])
    const [menuShow, setMenuShow] = useState(true)
    useEffect(() => {
        if (menuShow) {
            document.querySelector('.nav-mobile').style.display = "none";
        } else {
            document.querySelector('.nav-mobile').style.display = "flex";
        }

    }, [menuShow])
    return (
        <div className="nav-section py-3 px-3 ">
            <div className="logo-section">
                <h1><b>Question.Ask</b></h1>
            </div>
            <div className="right-nav-section">

                {user && admin.includes(user.email) && <span className="" style={{ cursor: "pointer" }}><a href="/admin">Admin</a></span>}
                <a href="/questions">questions</a>
                <a href="#footer">contact</a>
                <a href="/" onClick={() => {
                    navigate('/help')
                }}>help</a>
                {/* <a href="/">chat</a> */}
                <a href="/">profile</a>
                {user?.email || user?.phoneNumber ? <button onClick={handleSignOut} style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color: "white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>Log out</button> : <a href="/login"><button style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color: "white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>LOG IN</button></a>}

                {/* {user?.phoneNumber ? <button onClick={handleSignOut} style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color: "white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>Log out</button> : <></>} */}



            </div>

            <div className="men" onClick={() => {
                document.querySelector('.nav-mobile').style.display = "flex";
                setMenuShow(!menuShow)
            }} >
                <i className="fa-solid fa-bars "></i>
            </div>

            {/* ____________________________________________________________________________________________________________ */}
            <div className="nav-mobile">
                <div className="filter" style={{ color: "white", cursor: "pointer" }} onClick={() => {
                    if (filt) {
                        document.querySelector('.subject-section').style.display = "flex"
                        setFilt(!filt)
                    }
                    if (!filt) {
                        document.querySelector('.subject-section').style.display = "none"
                        setFilt(!filt)
                    }
                    // navigate('/')

                    setMenuShow(!menuShow)
                }}>
                    <i className="fa-solid fa-filter"></i>

                </div>
                <div className="meno" style={{ color: "white", cursor: "pointer" }} onClick={() => {
                    navigate('/')

                    setMenuShow(!menuShow)

                }}>
                    <i className="fa-solid fa-house-user"></i>
                </div>
                {user && admin.includes(user.email) && <span className="" style={{ cursor: "pointer" }}><a href="/admin">Admin</a></span>}
                <a href="/questions">questions</a>
                <a href="#footer" onClick={() => {
                    setMenuShow(!menuShow)
                }} >contact</a>
                <a href="/" onClick={() => {
                    navigate('/help')

                    setMenuShow(!menuShow)

                }}>help</a>
                {/* <a href="/">chat</a> */}
                <a href="/">profile</a>
                {user?.email ? <button onClick={handleSignOut} style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color: "white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>Log out</button> : <a href="/login" onClick={() => {
                    setMenuShow(!menuShow)
                }} ><button style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    color: "white",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>LOG IN</button></a>}

            </div>
        </div>
    );
}

export default Navbar;