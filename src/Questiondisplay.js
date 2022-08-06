import Exercise from "./Exercise";
import Subjecttopic from "./Subjecttopic";

const Questiondisplay = ({questions,sub}) => {

    let i = 1;
    return ( 
        <div className="questiondisplay">
            <Subjecttopic subject={sub}/>
             {(questions).map((question)=>{return (<Exercise key={question.id} questions={question.question} number={i++}/>)})}
            <div className="next-prev">
                <button className="prev">PREV</button>
                <button className="next">NEXT</button>
            </div>
            
        </div>
     );
}
 
export default Questiondisplay;