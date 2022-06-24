const Addquestionssection = () => {
    return ( 
        <div className="add-question">
        <form className="filter-ques">
        <select type={"text"} placeholder="Category/Exam type">
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
                <select type={"text"} placeholder="Subject">
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
                <textarea type={"text"} name="question" rows="9" cols="50" placeholder="Enter Question..."></textarea>
                <label>Provide answers below:</label>
                <textarea placeholder="A..." className="ansA" name="A"></textarea>
                <textarea placeholder="B..." className="ansA" name="B"></textarea>
                <textarea placeholder="C..." className="ansA" name="C"></textarea>
                <textarea placeholder="D..." className="ansA" name="D"></textarea>
                <button className="questionsubmit">SUBMIT</button>
            </form>
        </div>
     );
}
 
export default Addquestionssection;