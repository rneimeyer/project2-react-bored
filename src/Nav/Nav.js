import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    // const [custActive, setCustActive] = useState(false);
    // const [favActive, setFavActive] = useState(false);
    // const [contactActive, setContactActive] = useState(false);
    // const [aboutActive, setAboutActive] = useState(false);
    // const custClass = custActive ? "act" : "inact";
    // const favClass = favActive ? "act" : "inact";
    // const contactClass = contactActive ? "act" : "inact";
    // const aboutClass = aboutActive ? "act" : "inact";

    // const custClick = () => {
    //     setCustActive(true)
    //     setFavActive(false)
    //     setContactActive(false)
    //     setAboutActive(false)
    // }
    // const favClick = () => {
    //     setCustActive(false)
    //     setFavActive(true)
    //     setContactActive(false)
    //     setAboutActive(false)
    // }
    // const contactClick = () => {
    //     setCustActive(false)
    //     setFavActive(false)
    //     setContactActive(true)
    //     setAboutActive(false)
    // }
    // const aboutClick = () => {
    //     setCustActive(false)
    //     setFavActive(false)
    //     setContactActive(false)
    //     setAboutActive(true)
    // }

    return (
      <div className="Nav">
        <h1>BORED?</h1>
        <nav>
          <Link to="/customized" className="links"> Customized </Link> | 
          <Link to="/favorites" className="links"> Favorites </Link> | 
          <Link to="/contact" className="links"> Contact Us </Link> | 
          <Link to="/about" className="links"> About </Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;