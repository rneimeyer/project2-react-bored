import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
        <h1 className="homeName">BORED?</h1>
        <h2 className="homeH2">Let us help!</h2>
        <h3>Search for an option or browse through some fan favorites below!</h3>
        <ul>
          <li><Link to="/customized" className="links"> Customized </Link></li>
          <li><Link to="/favorites" className="links"> Favorites </Link></li>
          <li><Link to="/contact" className="links"> Contact Us </Link></li>
          <li><Link to="/about" className="links"> About Creator </Link></li>
          </ul>
      </div>
    );
  }
  
  export default Home;