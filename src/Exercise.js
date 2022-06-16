const Exercise = () => {
    return (
        <div className="exercise">

            <div className="ask">
                <div className="numbering">
                    {"1."}
                </div>
                The value of the attribute will be the name of the downloaded file. There are no restrictions on allowed values, and the browser will automatically detect the correct file extension and add it to the file (.img, .pdf, .txt, .html, etc.).
            </div>
            <div className="ans">
                <button>
                    <div className="first-ans">A</div> <div className="ans-final">None of the above </div>
                </button>
                <button>
                    <div className="first-ans">B</div><div className="ans-final">on and two </div>
                </button>
                <button>
                    <div className="first-ans">C</div><div className="ans-final">all the time</div>
                </button>
                <button>
                    <div className="first-ans">D</div><div className="ans-final">maybe but not always </div> </button>
            </div>
            <div className="ans-sort-bottom">
                <div className="stat">
                    Freq <b>{26}</b>
                </div>
                <div className="stat">
                    Difficulty <b color="green">{"2/10"}</b>
                </div>
            </div>
        </div>
    );
}

export default Exercise;