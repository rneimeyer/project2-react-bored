import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1 className="home-name">BORED?</h1>
      <h2 className="home-help">Let us help!</h2>
      <h2>Pick Your Color</h2>
      <div className="buttons">
      <button className="pink">Pink</button>
      <button className="purple">Purple</button>
      <button className="blue">Blue</button>
      <button className="green">Green</button>
      </div>
      <h3>
        <Link to="/customized" className="main-link">
          Enter Site
        </Link>
      </h3>
    </div>
  );
}

export default Home;
