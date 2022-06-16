import Profileinfo from "./Profileinfo";
import Questiondisplay from "./Questiondisplay";
import Subjects from "./Subjects";

const Question = () => {
    return ( 
        <div className="question-section">
            <Subjects />
            <Questiondisplay />
            <Profileinfo />
        </div>
     );
}
 
export default Question;