// import Subjectcourse from "./Subjectcourse";
import { UserAuth } from "./context/AuthContext";
const Profileinfo = () => {
    const {user} = UserAuth()
    return (
        <div className="profile-section">
            <div className="subject-category">
                {user?.displayName}
                <div style={{fontSize:"0.7rem"}}>{user?.email}</div>
                <div style={{fontSize:"0.7rem"}}>{user?.phoneNumber}</div>
                
            </div>
            <div className="info-me" style={{fontSize:"0.7rem"}}>
             <div className="score">Score: {12}</div>
             <div className="attempts">attempts: {12}</div>
             <div className="correct-attempt">correct-attempt: {12}</div>
             <div className="wrong-attempts">wrong-attempts: {12}</div>
            </div>
        </div>
    );
}

export default Profileinfo;