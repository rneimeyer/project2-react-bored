import "./Nav.css";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {

  return (
    <div className="Nav">
      <h1 className="site-name">BORED?</h1>
      <div className="menu">
      <FontAwesomeIcon icon={faBars} className="hamburger" />
      <nav>
        <Link to="/customized" className="links">
          {" "}
          Customized{" "}
        </Link>
        <Link to="/favorites" className="links">
          {" "}
          Favorites{" "}
        </Link>
        <Link to="/contact" className="links">
          {" "}
          Contact Us{" "}
        </Link>
        <Link to="/about" className="links">
          {" "}
          About{" "}
        </Link>
      </nav>
      </div>
    </div>
  );
}

export default Nav;
