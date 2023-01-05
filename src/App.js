import About from "./About";
import Competences from "./Competences";
import Contacts from "./Contacts";
import Education from "./Education";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr/>
      <About />
      <hr/>
      <Education />
      <hr/>
      <Competences />
      <hr/>
      <Projects />
      <hr/>
      <Contacts />
    </div>
  );
}

export default App;
