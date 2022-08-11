import Footer from "./Footer";
import Navbar from "./Navbar";
import Questions from "./pages/questions";
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { db } from "./firebase-config";
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Signup from './pages/signup'
import { AuthContextProvider } from "./context/AuthContext";
function App() {

  const [questions, setQuestions] = useState("")


  const questionsCollectionRef = collection(db, 'Questions')


  useEffect(() => {

    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);

      setQuestions(data.docs.map((post) => ({ ...post.data(), id: post.id })))


    }
    getQuestions()

  }, [])

  console.log("questions", questions)

  return (
    <div className="App">
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/questions' element={questions && <Questions questions={questions} sorted={setQuestions} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
