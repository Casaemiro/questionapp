// import { useState } from "react";
const Exercise = () => {
   
//  const [numberOfQuestionToDisplay, setnumberOfQuestionToDisplay] = useState(5)

 const renderQuestions = async () => {
    let uri = 'http://localhost:3000/questions';

 const container2 = document.querySelector(".dis")

    const res = await fetch(uri);
    const questions = await res.json();
    let template = ''
    let i = 1;
    questions.forEach(question => {
       template += `<div class="exercise">

       <div class="ask">
           <div class="numbering">
               ${i}.
           </div>
           ${question.quest}
       </div>
       <div class="ans">
           <button>
               <div class="first-ans">A</div> <div class="ans-final">${question.answers.A}</div>
           </button>
           <button>
               <div class="first-ans">B</div><div class="ans-final">${question.answers.B}</div>
           </button>
           <button>
               <div class="first-ans">C</div><div class="ans-final">${question.answers.C}</div>
           </button>
           <button>
               <div class="first-ans">D</div><div class="ans-final">${question.answers.D}</div> </button>
       </div>
       <div class="ans-sort-bottom">
           <div class="stat">
               Freq <b>${26}</b>
           </div>
           <div class="stat">
               Difficulty <b color="green"> 2/10 </b>
           </div>
           <div class="stat">
               Topic <b color="green">Logarithms, Matrices</b>
           </div>
           <div class="stat">
               Latst.Ex <b color="green">${question.year}</b>
           </div>
           <div class="stat">
               Correct <b color="green">150/200</b>
           </div>
       </div>
   </div>`
  i++
    });
 console.log("template")
    container2.innerHTML = template

}
window.addEventListener('DOMContentLoaded', renderQuestions);
    return (
       
        <div className="dis">
        {/* <></> */}
        </div>

    );
}

export default Exercise;