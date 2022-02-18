import "./Nav.css";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ colorTheme }) {

  return (
    <div className="Nav">
      <h1 className="site-name"><Link to="/" className={`site-name ${colorTheme}`}>BORED?</Link></h1>
      <div className="menu">
      <FontAwesomeIcon icon={faBars} className="hamburger" />
      <nav>
        <Link to="/customized" className={`links ${colorTheme}`}>
          {" "}
          Customized{" "}
        </Link>
        <Link to="/favorites" className={`links ${colorTheme}`}>
          {" "}
          Favorites{" "}
        </Link>
        <Link to="/contact" className={`links ${colorTheme}`}>
          {" "}
          Contact Us{" "}
        </Link>
        <Link to="/about" className={`links ${colorTheme}`}>
          {" "}
          About{" "}
        </Link>
      </nav>
      </div>
    </div>
  );
}

export default Nav;
