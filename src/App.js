import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Herobanner from './components/Herobanner';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navbar />
    <Routes>
      <Route path="/" exact element={ <Herobanner />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
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
