// import Subjectcourse from "./Subjectcourse";
import { UserAuth } from "./context/AuthContext";
const Profileinfo = () => {
    const {user} = UserAuth()
    return (
        <div className="profile-section">
            <div className="subject-category">
                {user?.displayName}
                <div style={{fontSize:"0.7rem"}}>{user?.email}</div>
                
            </div>
            <div className="courses">
             
            </div>
        </div>
    );
}

export default Profileinfo;