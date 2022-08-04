import Exercise from "./Exercise";
import Subjecttopic from "./Subjecttopic";

const Questiondisplay = ({questions}) => {
    let temp = questions[0].gceo.Biology.questions
    
   
    return ( 
        <div className="questiondisplay">
            <Subjecttopic subject={"Biology"}/>
             {(temp).map((subject)=>{return (<Exercise questions={subject}/>)})}
            <div className="next-prev">
                <button className="prev">PREV</button>
                <button className="next">NEXT</button>
            </div>
            
        </div>
     );
}
 
export default Questiondisplay;