import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Herobanner from "./components/Herobanner";
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Herobanner />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </header>
      </div>
    </>
  );
}

export default App;
