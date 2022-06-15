import Profileinfo from "./Profileinfo";
import Subjects from "./Subjects";

const Question = () => {
    return ( 
        <div className="question-section">
            <Subjects />
            <Profileinfo marginLeft="auto"/>
        </div>
     );
}
 
export default Question;