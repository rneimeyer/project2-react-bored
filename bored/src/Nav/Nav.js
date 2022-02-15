import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div className="Nav">
        <h1>BORED?</h1>
        <nav>
          <Link to="/customized" className="links"> Customized </Link> | 
          <Link to="/favorites" className="links"> Favorites </Link> | 
          <Link to="/contact" className="links"> Contact Us </Link> | 
          <Link to="/about" className="links"> About Creator </Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;