import {useState,useEffect} from "react"
import {db} from "./firebase-config"
import {collection, getDocs, addDoc} from "firebase/firestore"





const Addquestionssection = () => {


    const usersCollectionRef = collection(db,"Question")
    const [users, setUsers] = useState([])
    const [newQuest, setNewQuest] = useState("")
    const [newAnsA, setnewAnsA] = useState("")
    const [newAnsB, setnewAnsB] = useState("")
    const [newAnsC, setnewAnsC] = useState("")
    const [newAnsD, setnewAnsD] = useState("")
    const [newTopic, setnewTopic] = useState("")
    const [newSubject, setnewSubject] = useState("")
    
    function createQuestion(){
        // await addDoc(usersCollectionRef, { ansB:newAnsB, ansC:newAnsC,ansA:newAnsA, ansD:newAnsD, newQuest:newQuest,newSubject:newSubject,newTopic:newTopic}).then(()=>{
        //     console.log("success");
        //     console.log(users);
        // })
        console.log("working")
      }
   
      
    useEffect(()=>{
        const getUsers = async()=>{
            const data = await getDocs(usersCollectionRef)
            
            setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
          }
        getUsers()
      },[])
    
      



















    return ( 
        <div className="add-question">
        <div className="form-submit-head" style={
            {
                fontSize: "2.5rem",
                marginBottom: "5%",
                fontWeight: "bold"
            }
        }>
            Suport us by adding questions to our database
        </div>
        <div style={{
            display:"flex",
            flexDirection: "row",

        }}>
        <form className="filter-ques">
        <select type={"text"} placeholder="Category/Exam type"  onChange={(event)=>{setnewTopic(event.target.value)}}>
                    <option>Category/Exam type</option>
                    <option>O level</option>
                    <option>A level</option>
                    <option>BACC</option>
                    <option>CAP</option>
                    <option>ENS entrace</option>
                    <option>ENSET entrance</option>
                    <option>UB exam</option>
                    <option>FHS exam</option>
                    <option>CUIB exam</option>
                    <option>BIAKA exam</option>
                    <option>HIBMAT exam</option>
                    <option>RUBIMS exam</option>
                    <option>First school leaving</option>
                    <option>Common entrance exam</option>
                </select>
                <select type={"text"} placeholder="Subject" onChange={(event)=>{setnewSubject(event.target.value)}}>
                    <option>Subject</option>
                    <option>O level</option>
                    <option>A level</option>
                    <option>BACC</option>
                    <option>CAP</option>
                    <option>ENS entrace</option>
                    <option>ENSET entrance</option>
                    <option>UB exam</option>
                    <option>FHS exam</option>
                    <option>CUIB exam</option>
                    <option>BIAKA exam</option>
                    <option>HIBMAT exam</option>
                    <option>RUBIMS exam</option>
                    <option>First school leaving</option>
                    <option>Common entrance exam</option>
                </select>
                <textarea placeholder="Topics..."></textarea>
        </form>
            <form action="" className="addquest">
                <textarea onChange={(event)=>{setNewQuest(event.target.value)}} type={"text"} name="question" rows="9" cols="50" placeholder="Enter Question..."></textarea>
                <label>Provide answers below:</label>
                <textarea placeholder="A..." className="ansA" name="A" onChange={(event)=>{setnewAnsA(event.target.value)}}></textarea>
                <textarea placeholder="B..." className="ansA" name="B" onChange={(event)=>{setnewAnsB(event.target.value)}}></textarea>
                <textarea placeholder="C..." className="ansA" name="C" onChange={(event)=>{setnewAnsC(event.target.value)}}></textarea>
                <textarea placeholder="D..." className="ansA" name="D" onChange={(event)=>{setnewAnsD(event.target.value)}}></textarea>
                <button className="questionsubmit" onClick={createQuestion}>SUBMIT</button>
            </form>
        </div>
        
        </div>
     );
}
 
export default Addquestionssection;