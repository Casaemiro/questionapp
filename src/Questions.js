import Profileinfo from "./Profileinfo";
import Questiondisplay from "./Questiondisplay";
import { useState } from 'react'
// import Subjects from "./Subjects";
const Question = ({ questions, sorted }) => {
    const [sub, setSub] = useState("All subjects")
    //setting all questions
    const [newQuest, setNewQuest] = useState(questions)
    const [newQuestsorted, setNewQuestsorted] = useState(questions)
    // const [date,setDate] = useState(2019)
    // console.log("date",date);
    console.log("preQ", newQuest);
    //sorting questions based on exam
    const sortExam = (examType) => {
        let newQuestions = questions.filter((elem) => elem.exam === examType);
        console.log(newQuestions)
        setNewQuest(newQuestions)
        setNewQuestsorted(newQuestions)
        setSub("All subjects")
        return newQuestions
    }
    //sorting questions based on subject
    const sortsubject = (subject) => {
        let newQuestions = newQuestsorted.filter((elem) => elem.subject === subject);
        setNewQuest(newQuestions)
        setSub(subject)
    }
    const sortYear = (e) => {
        let filterdDate = newQuest.map((elem) => elem).filter((quest) => { return quest.question.year >= e })
        console.log(filterdDate);
        setNewQuest(filterdDate)
    }
    const sortDifficulty = (e) => {
        let diffiiculty = newQuest.map((elem) => elem).filter((quest) => { return quest.question.difficulty === e })
        setNewQuest(diffiiculty)
    }
    const sortTopic = (e) => {
        let topic = newQuest.map((elem) => elem).filter((quest) => { return quest.question.topics.includes(e) })
        setNewQuest(topic)
    }
    let i = 1;
    return (
        <div className="question-section">
            {/* <Subjects questions = {questions} sorted={sorted}/> */}
            <div className="subject-section">
                <div className="subject-category">
                    <select type={"text"} placeholder="Category/Exam type" onChange={(e) => { sortExam(e.target.value) }}>
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
                        return (<button onClick={() => { sortsubject(question.subject) }} key={question.id}>{question.subject}</button>)
                    }
                    )}

                </div>

                <div className="sorting">
                    <div className="sortTitle"><b>FILTER</b></div>
                    <div className="halfsort" >
                        <select type={"Date"} onChange={(e) => { sortYear(+(e.target.value)) }} >
                            {newQuest.map((elem) => {
                                return (
                                    <option key={elem.id}>{elem.question.year}</option>
                                )
                            })}
                        </select>
                        <select type={"Date"} disabled>
                            <option>After {questions[0].question.year}</option>
                            <option>before {questions[0].question.year}</option>
                            <option>exacty {questions[0].question.year}</option>
                        </select>
                    </div>
                    <select type={"Date"} className="fullsort" onChange={(e) => { sortDifficulty(e.target.value) }} >
                        <option>difficulty</option>
                        <option>very easy</option>
                        <option>easy</option>
                        <option>standard</option>
                        <option>hard</option>
                        <option>very hard</option>
                    </select>
                    <select type={"Date"} className="fullsort" onChange={(e) => { sortTopic(e.target.value) }} >
                        <option>topic</option>
                        {newQuest.map((elem) => {
                            return (
                                (elem.question.topics).map((el) => { return (<option key={i++}>{el}</option>) })
                            )
                        })}
                    </select>
                </div>
            </div>
            <Questiondisplay questions={newQuest} sub={sub} />
            <Profileinfo />
        </div>
    );
}

export default Question;