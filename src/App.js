import Addquestionssection from "./Addquestionssection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Question from "./Questions";
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { db } from "./firebase-config";
function App() {
  
  const [questions, setQuestions] = useState("")
  
    
  const questionsCollectionRef = collection(db, 'Questions')
  
  
  useEffect(() => {

    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);

      setQuestions(data.docs.map((post) => ({ ...post.data(), id:post.id })))


    }
    getQuestions()

  }, [])

  console.log("questions", questions)
 
  return (
    <div className="App">
      <Navbar />
      {questions && <Question questions = {questions}/>}
      <Addquestionssection />
      <Footer />
    </div>
  );
}

export default App;
