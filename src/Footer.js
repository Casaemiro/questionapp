const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h3>Partners</h3>
                    <p>University of Buea<br/>
                    BIAKA institude<br/>
                    HIBMAT<br/>
                    LANDMARK<br/>
                    CHITECHMA<br/>
                    RUBIMS<br/>
                    CUIB<br/>
                    BHS<br/>
                    BGS</p>
                </div>
                <div className="footer-top-middle">
                <h3>About us</h3>
                    <p>
                    questio.ask is a platform designed to help students of all fields and specialties better prepare for thier exams
                    </p>
                    <div style={{
                        fontSize: "1.3rem",
                        fontWeight:"bold",
                    }}>Become a partner</div>
                    <p>
                    you can partner with us by providing us with exam questions for your institution/donaing to help us increase the impact. <button style={{
                        color: "white",
                        border: "1px solid white",
                        borderRadius: "10px"
                    }}>click here</button> to partner
                    </p>
                </div>
                <div className="footer-top-middle">
                <h3>What's new</h3>
                    <p>
                    You can now find questions on a particular topic or questions that are rated easy by community members
                    </p>
                </div>
                <div className="footer-top-right">
                    <form action="post" className="footer-form">
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Comments/Recomendation..."></textarea>
                        <button>SEND</button>
                    </form>
                </div>
            </div>
            <div className="footer-links">
                <a href="/">contact</a>
                <a href="/">Donate</a>
                <a href="/">contributors</a>
                <a href="/">instagram</a>
                <a href="/">facebook</a>
                <a href="/">share</a>
                <a href="/">copyright2022</a>
            </div>
        </div>
    );
}

export default Footer;