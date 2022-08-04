// import Subjectcourse from "./Subjectcourse";

const Subjects = ({questions}) => {
    return (
        <div className="subject-section">
            <div className="subject-category">
                <select type={"text"} placeholder="Category/Exam type">
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
            </div>
            <div className="courses">
                {Object.keys(questions[0].gceo).map((subject) => {
                    return(<button key={subject}>{subject}</button>)
                }
                )}

                {/* <button>Biology</button>
                <button>Physics</button>
                <button>Mathematics</button>
                <button>Chemistry</button>
                <button>Geology</button>
                <button>Further Mathematics</button>
                <button>Aditional Mathematics</button>
                <button>Citizenship</button>
                <button>French</button>
                <button>English</button>
                <button>Logic</button>
                <button>Chemistry</button>
                <button>Biology</button>
                <button>Physics</button>
                <button>Mathematics</button>
                <button>Chemistry</button>
                <button>Geology</button>
                <button>Further Mathematics</button>
                <button>Aditional Mathematics</button>
                <button>Citizenship</button>
                <button>French</button>
                <button>English</button>
                <button>Logic</button> */}
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