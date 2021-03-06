import './App.css'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode , setMode] =  useState('light'); //whether darkmode or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    },1500);
  }

  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode Is Enabled", "success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Is Enabled", "success")

      }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below :" mode={mode}/>
          </Route>
        </Switch>
    </div>
    {/* <Footer title="Text Utils" mode={mode}/> */}
    </Router>
    </>
  );
}

export default App;
