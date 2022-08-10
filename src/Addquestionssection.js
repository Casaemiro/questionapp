import { useState } from "react"
import { db } from "./firebase-config"
import { collection, addDoc } from "firebase/firestore"





const Addquestionssection = () => {


    const usersCollectionRef = collection(db, "Questions")
    const [newQuest, setNewQuest] = useState("")
    const [newAnsA, setnewAnsA] = useState("")
    const [newAnsB, setnewAnsB] = useState("")
    const [newAnsC, setnewAnsC] = useState("")
    const [newAnsD, setnewAnsD] = useState("")
    const [newTopic, setnewTopic] = useState("")
    const [newSubject, setnewSubject] = useState("")
    const [newYear, setnewYear] = useState("")
    const [newCorrect, setnewCorrect] = useState("")
    const [newCategory, setnewCategory] = useState("")
    const [newDifficulty, setnewDifficulty] = useState("very easy")

    const createQuestion = async () => {
        await addDoc(usersCollectionRef, {
            question: {
                question: newQuest,
                answers: [newAnsA, newAnsB, newAnsC, newAnsD],
                correctanswer: newCorrect,
                year: newYear,

                topics: [...newTopic.split(",")],
                difficulty: newDifficulty
            },
            exam: newCategory,
            subject: newSubject,
        })
            .then(console.log("DONE"))
    }


    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef)

    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }
    //     getUsers()
    // }, [])







    return (
        <div className="add-question">
            <div className="form-submit-head">
                Suport us by adding questions to our database
            </div>
            <div  className="add-quest">
                <form className="filter-ques">
                    <select type={"text"} placeholder="Category/Exam type" onChange={(event) => { setnewCategory(event.target.value) }}>
                        <option>Category/Exam type</option>
                        <option value={"gceo"} >O level</option>
                        <option value={"gcea"} >A level</option>
                        <option value={"bacc"} >BACC</option>
                        <option value={"cap"} >CAP</option>
                        <option value={"ens"} >ENS entrace</option>
                        <option value={"enset"} >ENSET entrance</option>
                        <option value={"ubexam"} >UB exam</option>
                        <option value={"fhsexam"} >FHS exam</option>
                        <option value={"cuibexaam"} >CUIB exam</option>
                        <option value={"biakaexam"} >BIAKA exam</option>
                        <option value={"hibmatexam"} >HIBMAT exam</option>
                        <option value={"rubimsexam"} >RUBIMS exam</option>
                        <option value={"fslc"} >First school leaving</option>
                        <option value={"ce"} >Common entrance exam</option>
                    </select>
                    <select type={"text"} placeholder="Subject" onChange={(event) => { setnewSubject(event.target.value) }}>
                        <option>Subject/course</option>
                        <option>Biology</option>
                        <option>Chemistry</option>

                    </select>
                    <textarea className="ansA" placeholder="Topics...e.g Osmosis,Transport" onChange={(event) => { setnewTopic(event.target.value) }}></textarea>
                    <textarea className="ansA" placeholder="year..." onChange={(event) => { setnewYear(event.target.value) }}></textarea>
                    Difficulty
                    <select className="ansA" style={{ height: "3rem" }} type={"number"} onChange={(event) => { setnewDifficulty(event.target.value) }}>
                        <option>very easy</option>
                        <option>easy</option>
                        <option>standard</option>
                        <option>hard</option>
                        <option>very hard</option>
                    </select>
                    {/* <input placeholder="Dificulty on a scale of 1 to 10" /> */}
                </form>
                <div className="addquest">
                    <textarea className="ansA" onChange={(event) => { setNewQuest(event.target.value) }} type={"text"} name="question" rows="9" cols="50" placeholder="Enter Question..."></textarea>
                    <label>Provide answers below:</label>
                    <textarea placeholder="A..." className="ansA" name="A" onChange={(event) => { setnewAnsA(event.target.value) }}></textarea>
                    <textarea placeholder="B..." className="ansA" name="B" onChange={(event) => { setnewAnsB(event.target.value) }}></textarea>
                    <textarea placeholder="C..." className="ansA" name="C" onChange={(event) => { setnewAnsC(event.target.value) }}></textarea>
                    <textarea placeholder="D..." className="ansA" name="D" onChange={(event) => { setnewAnsD(event.target.value) }}></textarea>
                    Correct answer
                    <select className="ansA" name="D" style={{ height: "3rem" }} onChange={(event) => { setnewCorrect(event.target.value) }}>
                        <option>{"Select the correct answer"}</option>
                        <option>{newAnsA}</option>
                        <option>{newAnsB}</option>
                        <option>{newAnsC}</option>
                        <option>{newAnsD}</option>
                    </select>
                    {/* <textarea placeholder="Correct answer letter(A,B,C or D)..." className="ansA" name="D" onChange={(event) => { setnewCorrect(event.target.value) }}></textarea> */}
                    <button className="questionsubmit" onClick={createQuestion}>SUBMIT</button>
                </div>
            </div>

        </div>
    );
}

export default Addquestionssection;