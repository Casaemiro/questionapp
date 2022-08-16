import './home.css'
import pn from '../images/phone.PNG'
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user } = UserAuth()
    const navigate = useNavigate()
    return (
        <>
            <div className='wel' style={{}}>
                <img className='welcomeimage' src={pn} alt="" />
                <div className="p-4 weltext">
                    <div className='bigwelcome'>Welcome</div>
                    <p>Welcome to questio.ask. This is a platform designed to help students of all fields and specialties better prepare for exams and evaluate themselves. <a href="/login">Sign-in</a> in order to track your progress. If you're already signed in, click getting started button below </p>
                    <div>
                        <button onClick={() => {
                            if (user != null) {
                                console.log("wow", user);
                                navigate('/questions')
                            } else {
                                navigate('/login')

                            }
                        }}>Getting Started</button>
                    </div>
                </div>
            </div>
            <div className="services-head">What we offer</div>
            <div className='services row'>
                <div className='col-md-3 col-sm-6 col-12'>
                    <div className="hd">Question bank</div>
                    <i className="fa-solid fa-clipboard-question  fa-3x py-3"></i>
                    <p>We provided you with unlimited accces to our huge bank of questions and answers as well as answer guides collected over the years to helps you in your learning and exam preperation</p>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <div className="hd">Revision guide</div>
                    <i className="fa-solid fa-graduation-cap fa-3x py-3"></i>
                    <p>Proper preperation aids confidence and increaces your chances of passing an exam. Here, we give you everything you need to ace your tests.</p>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <div className="hd">Personal Evaluation</div>
                    <i className="fa-solid fa-dna fa-3x py-3"></i>
                    <p>We allow you to take custom exams and we keep track of your performance based on the the difficulty level of the questions..</p>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <div className="hd">Competitions</div>
                    <i className="fa-solid fa-award fa-3x py-3"></i>
                    <p>Competitions are a fun way to promote learning and excellence. We provide a platform for individuals and institutions to organize scholarship and price based competitions on the site.</p>
                </div>
            </div>
            <div className='competition'>
                <div className='mx-1 competition-head'>Competition</div>
                <div className="p-sm-2 p-3 cen">On going competitions and competition notices will be posted here
                <p>Sign up to receive notifications through email</p>
                <input type={"text"} placeholder="example@gmail.com..." className="w-40"/>
                <input type={"submit"} value="Send" className="w-40 px-3" />
                </div>
            </div>
        </>
    );
}

export default Home;