const Navbar = () => {
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
                    marginRight:"1%",
                    textAlign:"center"
                }}>LOG IN</button>
                <button>SIGN IN</button>
            </div>
        </div>
     );
}
 
export default Navbar;