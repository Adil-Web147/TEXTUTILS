import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Default to light mode
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
       type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils dark mode ';

    } else {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils Light mode ';
    }
  }

  return (
    <>
     {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />
           
          {/* </Route> */}
        {/* </Switch> */}
      
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;