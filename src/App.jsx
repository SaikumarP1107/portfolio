import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Herobanner from "./components/Herobanner";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Herobanner />
          <About />
          <Contact />
        </header>
      </div>
    </>
  );
}

export default App;
