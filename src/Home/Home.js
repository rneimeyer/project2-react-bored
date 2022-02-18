import "./Home.css";
import { Link } from "react-router-dom";

function Home({ colorTheme, setColorTheme }) {
  const pinkClick = (event) => {
    event.preventDefault();
    setColorTheme("pink");
  };
  const purpleClick = (event) => {
    event.preventDefault();
    setColorTheme("purple");
  };
  const blueClick = (event) => {
    event.preventDefault();
    setColorTheme("blue");
  };
  const greenClick = (event) => {
    event.preventDefault();
    setColorTheme("green");
  };

  return (
    <div className="Home">
      <h1 className={`home-name ${colorTheme}`}>BORED?</h1>
      <h2 className={`home-help ${colorTheme}`}>Let us help!</h2>
      <h2 className={`${colorTheme}`}>Pick Your Color Theme</h2>
      <div className="buttons">
        <button className="pink" onClick={pinkClick}>
          Pink
        </button>
        <button className="purple" onClick={purpleClick}>
          Purple
        </button>
        <button className="blue" onClick={blueClick}>
          Blue
        </button>
        <button className="green" onClick={greenClick}>
          Green
        </button>
      </div>
      <h3>
        <Link to="/customized" className={`main-link ${colorTheme}`}>
          Enter Site
        </Link>
      </h3>
    </div>
  );
}

export default Home;
