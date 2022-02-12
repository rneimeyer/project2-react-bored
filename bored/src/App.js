import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import About from './About/About';
import Contact from './Contact/Contact';
import Favorites from './Favorites/Favorites';
import Customized from './Customized/Customized';

function App() {
  return (
    <div className="App">
      <h1>BORED?</h1>
      <nav>
        <Link to="/customized" className="links"> Customized </Link> | 
        <Link to="/favorites" className="links"> Favorites </Link> | 
        <Link to="/contact" className="links"> Contact Us </Link> | 
        <Link to="/about" className="links"> About Creator </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to ="/customized" />} />
          <Route path="/home" element={<Navigate to ="/customized" />} />
          <Route path="/customized" element={<Customized />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;