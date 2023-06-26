import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Editor"/>
    <div className="container my-3">
    <TextForm heading="Enter Text To Analyse"/>
    </div>
    <div className="container">
    <About/>
    </div>
    </>
  );
}
export default App;
