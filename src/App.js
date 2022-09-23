
import { useState } from 'react';
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Switch from "react-switch";

import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  const [mode ,setMode] = useState("light");

  const toggleMode =() =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.background ="skyblue";
      document.title ='TextUtils-Dark Mode'
    }else{
      setMode("light")
      document.body.style.background ="";
      document.title ='TextUtils-Light Mode'
    }
  }
  return (
    <><Router>
  
      <Navbar title = "TEXTUTILS" mode={mode} toggleMode ={toggleMode}/>
   
    <div className="container my-3">
        <Routes>
        <Route exact path ="/" element={ <TextForm heading = "Enter Your Text Here (Convert TO :-UPPERCASE , lowecase & Reverse)" mode ={mode}/>}/>
        </Routes>
        <Routes>
        <Route exact path ="/About" element={<About/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
