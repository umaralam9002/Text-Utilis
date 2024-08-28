import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './index.css'; 
import React, { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      message: message
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
    <Router>
    <Navbar title = "TextApp" about = "Abous Us" ></Navbar>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
    <Route path="/about" exact element={<About />} />
    <Route  path="/" exact element={<TextForm Mainheading="Customize Your Text" showAlert={showAlert} />} />
    </Routes>
    </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
