import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g7gppds', 'template_4hxia1i', form.current, 'kyX-5c9uj0jFF3MzW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const [isFormValidated, setIsFormValidated] = useState(true);
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    useEffect(() => {
        if (name !== "" && message !== "") {
            setIsFormValidated(false)
        } else {
            setIsFormValidated(true)

        }
    }, [name, message])
    return (
        <div className="footer" id="footer">
            <div className="footer-top row">
                <div className="partner footer-top-left col-11 col-sm-3 col-md-4 col-lg-3">
                    <h3>Partners</h3>
                    
                    <p className='row' ><>University of Buea<br /></>
                    <>BIAKA institude<br /></>
                    <>HIBMAT<br /></>
                    <>LANDMARK<br /></>
                    <>CHITECHMA<br /></>
                    <>RUBIMS<br /></>
                    <>CUIB<br /></>
                    <>BHS<br /></>
                    <>BGS</></p>
                        
                        
                        
                        
                        
                        
                        
                        
                </div>
                <div className="footer-top-middle col-12 col-sm-8 col-md-4 col-lg-3 row">
                    <div className="col-sm-6 col-md-12">

                        <h3>About us</h3>
                        <p>
                            question.ask is a platform designed to help students of all fields and specialties better prepare for thier exams
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-12 ">

                        <h3>Become a partner</h3>
                        <p>
                            you can partner with us by providing us with exam questions for your institution/donaing to help us increase the impact. <a style={{
                                color: "white"
                            }}>click here</a> to partner
                        </p>
                    </div>
                </div>
                <div className="footer-top-middle col-12 col-md-4 col-lg-3">
                    <h3>What's new</h3>
                    <p>
                        You can now find questions on a particular topic or questions that are rated easy by community members
                    </p>
                </div>
                <div className=" col-12 col-md-4 col-lg-3">
                    <form  ref={form} onSubmit={sendEmail} action="post" className="footer-form">
                    <input type="text" name="user_name" onChange={(e)=>{setName(e.target.value)}} className="w-100 mb-2 p-2" placeholder='Name...' />
                        <input type="text" name='user_email' placeholder="email..." className="w-100 mb-2 p-2" />
                        <textarea id="w3review" name="message" onChange={(e)=>{

                        setMessage(e.target.value)
                        }} rows="4" cols="50" placeholder="Comments/Recomendation..." className="w-100"></textarea>
                        <input type="submit" value="Send" disabled={isFormValidated}/>
                        
                    </form>
                </div>
                <div>
                    {/* <form>
                        <label>Name</label>
                        
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}
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