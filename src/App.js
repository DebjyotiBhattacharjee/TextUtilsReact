//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor='#020220ab';
      showAlert("Dark mode is enebaled","success");
      // document.title='Experiment-Dark mode';
      //setInterval(()=>{
      //  document.title='Experiment is amazing'
      //},2000);
      //setInterval(()=>{
      //  document.title='Install Experiment now'
      //},1500);
    }else{
      setMode ('light')
      document.body.style.backgroundColor='#9ce9df45';
      showAlert("Light mode is enebaled","success")
    //document.title='Experiment-Light mode';
     }
  }

  return (
    <>
    <Router>
    <Navbar title="Experiment" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze" mode={mode}/>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      
        
     </div>
     </Router>
     </>
  );
 
}

export default App;
