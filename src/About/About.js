import "./About.css";
import Nav from "../Nav/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Footer from "../Footer/Footer";

function About({ colorTheme }) {
  return (
    <div className="page-container">
      <Nav colorTheme={colorTheme} />
      <div className={`about ${colorTheme}`}>
        <div className="about-creator">
          <h2>About the Creator</h2>
          <p>
            Hi! My name is Rebecca Neimeyer, and I developed this project to
            showcase my knowledge of React and rendering data from the{" "}
            <a href="https://www.boredapi.com" target="_blank" rel="noreferrer">
              Bored API
            </a>
            . I hope this helps you find a fun activity to do when you are
            bored!
          </p>
          <p>
            Please feel free to get in touch with me via{" "}
            <a
              href="https://www.linkedin.com/in/rebecca-neimeyer"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            !
          </p>
        </div>
        <div className="about-card">
          <h2>Activity Card Key</h2>
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Body>
              <Card.Title>Activity Description!</Card.Title>
              <Card.Subtitle>type of activity </Card.Subtitle>
              <br />
              <Card.Text>Number of participant(s)</Card.Text>
              <Card.Text>
                Price Range: How much does this cost on a scale of 1-10? Below
                shows a 5/10 on the scale.
              </Card.Text>
              <ProgressBar variant="success" now={50} />
              <br />
              <Card.Text>
                Accessibility Range: How possible is this to accomplish on a
                scale of 1-10? Below shows a 5/10 on the scale.
              </Card.Text>
              <ProgressBar now={50} />
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer colorTheme={colorTheme} />
    </div>
  );
}

export default About;
