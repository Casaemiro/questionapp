import Profileinfo from "./Profileinfo";
import Questiondisplay from "./Questiondisplay";
import Subjects from "./Subjects";

const Question = ({questions}) => {
    return ( 
        <div className="question-section">
            <Subjects questions = {questions}/>
            <Questiondisplay questions = {questions}/>
            <Profileinfo />
        </div>
     );
}
 
export default Question;