import { useState } from "react";
const Navbar = () => {
    const [filt, setFilt] = useState(true)
    return (
        <div className="nav-section">
            <div className="logo-section">
                <h1>Question.Ask</h1>
            </div>
            <div className="right-nav-section">

                <a href="/">contact</a>
                <a href="/">help</a>
                <a href="/">forum</a>
                <a href="/">profile</a>
                <button style={{
                    marginRight: "1%",
                    textAlign: "center",
                    border: "none",
                    backgroundColor: "rgba(0,50,0,0.5)"
                }}>LOG IN</button>
                <button style={{ backgroundColor: "white", border: "none" }}>SIGN UP</button>
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