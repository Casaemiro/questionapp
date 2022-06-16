// import Subjectcourse from "./Subjectcourse";

const Subjects = () => {
    return (
        <div className="subject-section">
            <div className="subject-category">
                <input type={"text"} placeholder="Category/Exam type" />
            </div>
            <div className="courses">
                {/* <Subjectcourse name={"Chemistry"}/>
            <Subjectcourse name={"Biology"}/>
            <Subjectcourse name={"Physics"}/>
            <Subjectcourse name={"Computer Science"}/> */}
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
                <button>Logic</button>
            </div>
            
            <div className="sorting">
            <div className="sortTitle">FILTER</div>
                <input type={"Date"} placeholder={"Date"} className="halfsort"/>
                <input type={"text"} placeholder={"Difficulty"} className="halfsort"/>
                <input type={"text"} placeholder={"Topic"} className="fullsort"/>
                <input type={"Number"} placeholder={"Frequency"} className="fullsort"/>

            </div>
        </div>
    );
}

export default Subjects;