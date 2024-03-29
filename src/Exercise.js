// import { useState } from "react";


const Exercise = ({questions,number}) => {
    const checkAnswer = (chosen,actual,e) => {
        // console.log(chosen)
        // console.log(actual)
        if(chosen === actual){
            e.target.style.color = "green"
        }else {
            e.target.style.color = "red"

        }
    }
return(
    <div className="exercise">

       <div className="ask">
           <div className="numbering">
               {number}.
           </div>
           {questions.question}
       </div>
       <div className="ans">
           <span onClick={(e)=>{checkAnswer(questions.answers[0], questions.correctanswer,e)}}>
               <div className="first-ans">A</div> <div className="ans-final">{questions.answers[0]}</div>
           </span>
           <span onClick={(e)=>{checkAnswer(questions.answers[1], questions.correctanswer,e)}}>
               <div className="first-ans">B</div><div className="ans-final">{questions.answers[1]}</div>
           </span>
           <span onClick={(e)=>{checkAnswer(questions.answers[2], questions.correctanswer,e)}}>
               <div className="first-ans">C</div><div className="ans-final">{questions.answers[2]}</div>
           </span>
           <span onClick={(e)=>{checkAnswer(questions.answers[3], questions.correctanswer,e)}}>
               <div className="first-ans">D</div><div className="ans-final">{questions.answers[3]}</div> </span>
       </div>
       <div className="ans-sort-bottom">
           <div className="stat">
               Freq <b>{}</b>
           </div>
           <div className="stat">
               Difficulty <b color="green"> {questions.difficulty} </b>
           </div>
           <div className="stat">
               Topic <b color="green">{(questions.topics).join(", ")}</b>
           </div>
           <div className="stat">
               Latst.Ex<b> {questions.year}</b><b color="green">{}</b>
           </div>
           <div className="stat">
               Correct <b color="green">150/200</b>
           </div>
       </div>
   </div>
)
}

export default Exercise;