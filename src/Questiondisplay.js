import Exercise from "./Exercise";
import Subjecttopic from "./Subjecttopic";

const Questiondisplay = () => {
    
   
    return ( 
        <div className="questiondisplay">
            <Subjecttopic subject={"Mathematics"}/>
            <Exercise/>
            <div className="next-prev">
                <button className="prev">PREV</button>
                <button className="next">NEXT</button>
            </div>
            
        </div>
     );
}
 
export default Questiondisplay;