import Exercise from "./Exercise";
import Subjecttopic from "./Subjecttopic";

const Questiondisplay = ({ questions, sub }) => {

    let i = 1;
    return (
        <div className="questiondisplay">
            <Subjecttopic subject={sub} />
            {(questions).map((question) => { return (<Exercise key={question.id} questions={question.question} number={i++} />) })}
            <div className="next-prev">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                {/* <button className="prev">PREV</button>
                <button className="next">NEXT</button> */}
            </div>

        </div>
    );
}

export default Questiondisplay;