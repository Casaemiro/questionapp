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
                <div className="footer-top-middle"></div>
                <div className="footer-top-right">
                    <form action="post" className="footer-form">
                        <input type={"textarea"} placeholder="Comment/Recommendation..."/>
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