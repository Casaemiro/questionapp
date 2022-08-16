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
import Home from "./pages/home";
import Admin from "./pages/Admin";
import Help from "./pages/help";
function App() {

  const [questions, setQuestions] = useState("")
  const [users, setUsers] = useState("")


  const questionsCollectionRef = collection(db, 'Questions')
  const usersCollectionRef = collection(db, 'users')


  useEffect(() => {

    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);
      const userdata = await getDocs(usersCollectionRef);

      setQuestions(data.docs.map((post) => ({ ...post.data(), id: post.id })))
      setUsers(userdata.docs.map((post) => ({ ...post.data(), id: post.id })))


    }
    getQuestions()

  }, [])

  console.log("users", users)

  return (
    <div className="App">
    <AuthContextProvider>
    {users && <Navbar  users={users}/>}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/questions' element={questions && <Questions questions={questions} sorted={setQuestions} />} />
        <Route path='/' element={<Home />} />
        <Route path='/help' element={<Help />} />
        <Route path='/signup' element={<Signup />} />


      </Routes>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
