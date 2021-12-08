import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm heading="Enter the text below to Analyse" showAlert={showAlert} />
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
