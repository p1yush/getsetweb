import Homepage from './components/Homepage';
import About from './components/About';
import Specialization from './components/Specialization';
import Contact from './components/Contact';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={ <Homepage />}/>
      <Route exact path="/about" element={ <About />}/>
      <Route exact path="/specialization" element={ <Specialization />}/>
      <Route exact path="/contact" element={ <Contact />}/>
    </Routes>
    </>
  );
}

export default App;

