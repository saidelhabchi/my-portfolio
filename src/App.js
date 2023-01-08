import "./App.css";
import About from "./About";
import Competences from "./Competences";
import Contacts from "./Contacts";
import Education from "./Education";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo from './logo.PNG';
import React, { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ darkMode ? "dark-mode" : "light-mode" }>
      <div className="container">
      
      <div className="navbar">
          <img src={logo} alt="logo" className={"logo rounded "}/>
          {/** 
          <h3 className={darkMode ? "dark-mode" : "light-mode"}>logo</h3>
          */}
          <div className="d-flex justify-content-between fs-3 mt-5">
              <div className={darkMode ? "dark-mode" : "light-mode"}><BsFillMoonStarsFill onClick={()=>{
                setDarkMode(!darkMode)
              }}/></div>
              <a href="Said Elhabchi CV.pdf"
              download={"Said Elhabchi CV.pdf"}>
                  <button type="button" class={darkMode ? "btn btn-light mx-4" : "btn btn-dark mx-4"}>Resume</button>
              </a>                
          </div>
      </div>

      
      <About mode={darkMode ? "dark-mode" : "light-mode"}/>
      <hr/>
      <Education mode={darkMode ? "dark-mode" : "light-mode"}/>
      <hr/>
      <Competences mode={darkMode ? "dark-mode" : "light-mode"}/>
      <hr/>
      <Projects mode={darkMode ? "dark-mode" : "light-mode"}/>
      <hr/>
      <Contacts mode={darkMode ? "dark-mode" : "light-mode"}/>
      </div>

    </div>
  );
}


export default App;
