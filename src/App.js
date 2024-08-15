
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route
} from "react-router-dom";


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
       <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Replace Switch with Routes */}
            <Route exact path="/about" element={<About />} /> {/* Use element prop */}
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    
    </>
  );
}

export default App;
