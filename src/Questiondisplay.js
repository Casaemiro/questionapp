import Exercise from "./Exercise";
import Subjecttopic from "./Subjecttopic";

const Questiondisplay = () => {
    return ( 
        <div className="questiondisplay">
            <Subjecttopic subject={"Mathematics"}/>
            <Exercise />
            <Exercise />
            <Exercise />

            <Exercise />


        </div>
     );
}
 
export default Questiondisplay;