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
                <a href="/"><button>LOG IN</button></a>
                <a href="/"><button>SIGN IN</button></a>
            </div>
        </div>
     );
}
 
export default Navbar;