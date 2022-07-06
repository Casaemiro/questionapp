import Addquestionssection from "./Addquestionssection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Question from "./Questions";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Question />
      <Addquestionssection />
      <Footer />
    </div>
  );
}

export default App;
