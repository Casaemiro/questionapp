import Addquestionssection from "../Addquestionssection";

import Question from "../Questions";
const Questions = ({ questions, sorted }) => {
    return (
        <>
            {questions && <Question questions={questions} sorted={sorted} />}
            <Addquestionssection />
            
        </>
    )
}
export default Questions
