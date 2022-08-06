// import Subjectcourse from "./Subjectcourse";

const Subjects = ({questions,sorted}) => {
    console.log("t",questions);
    const sortExam = (examType) => {
        let newQuestions = questions.filter((elem)=>elem.exam===examType);
        console.log(newQuestions)
        // sorted(newQuestions)
        return newQuestions
    }
    sortExam("gceo")
    return (
        <div className="subject-section">
            <div className="subject-category">
                <select type={"text"} placeholder="Category/Exam type" onChange={(e)=>{sortExam(e.target.value)}}>
                    <option value={"gceo"}>O level</option>
                    <option value={"gcea"}>A level</option>
                    <option value={"gceo"}>BACC</option>
                    <option value={"gceo"}>CAP</option>
                    <option value={"gceo"}>ENS entrace</option>
                    <option value={"gceo"}>ENSET entrance</option>
                    <option value={"gceo"}>UB exam</option>
                    <option value={"gceo"}>FHS exam</option>
                    <option value={"gceo"}>CUIB exam</option>
                    <option value={"gceo"}>BIAKA exam</option>
                    <option value={"gceo"}>HIBMAT exam</option>
                    <option value={"gceo"}>RUBIMS exam</option>
                    <option value={"gceo"}>First school leaving</option>
                    <option value={"gceo"}>Common entrance exam</option>
                </select>
            </div>
            <div className="courses">
                {questions.map((question) => {
                    return(<button key={question.id}>{question.subject}</button>)
                }
                )}

            </div>

            <div className="sorting">
                <div className="sortTitle"><b>FILTER</b></div>
                <div className="halfsort" >
                    <select type={"Date"} placeholder="Category/Exam type">
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                    <select type={"Date"} placeholder="Category/Exam type">
                        <option></option>
                        <option>2020</option>
                    </select>
                </div>
                <select type={"Date"} placeholder="Category/Exam type" className="fullsort" >
                    <option></option>
                    <option>2020</option>
                </select>
                <select type={"Date"} placeholder="Category/Exam type" className="fullsort" >
                    <option></option>
                    <option>2020</option>
                </select>
            </div>
        </div>
    );
}

export default Subjects;