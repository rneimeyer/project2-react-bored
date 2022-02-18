import "./Type.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

function Type({ typeClass, favoriteArr, setFavoriteArr, colorTheme }) {
  const [choice, setChoice] = useState("");
  const [typeData, setTypeData] = useState({});

  const handleChoice = (event) => {
    setChoice(event.target.value);
  };
  const displayChoice = (event) => {
    event.preventDefault();
    fetch(`https://www.boredapi.com/api/activity?type=${choice}`)
      .then((response) => response.json())
      .then((data) => setTypeData(data));
  };

  const addToFavorites = (favorite) => {
    const favoritesCopy = [...favoriteArr];
    favoritesCopy.push(favorite);
    setFavoriteArr(favoritesCopy);
  };

  const handleClick = (event) => {
    event.preventDefault();
    addToFavorites(typeData);
  };

  const showCard = () => {
    if (typeData.activity === undefined) {
      return <div>Make your choice above to see your options!</div>;
    } else {
      return (
        <Card style={{ width: "18rem" }} className="mx-auto cust-card">
          <Card.Body>
            <Card.Title>{typeData.activity}!</Card.Title>
            <Card.Subtitle>{typeData.type} activity </Card.Subtitle>
            <br />
            <Card.Text>{typeData.participants} participant(s)</Card.Text>
            <Card.Text>Price Range:</Card.Text>
            <ProgressBar variant="success" now={typeData.price * 100} />
            <br />
            <Card.Text>Accessibility Range:</Card.Text>
            <ProgressBar now={typeData.accessibility * 100} />
            <br />
            <Button onClick={handleClick}>Add to Your Favorites!</Button>
            <br />
            <Button onClick={displayChoice}>Refresh</Button>
            <br />
            <Card.Link href="mailto:yourfriend@email.com?subject=Activity Idea!&body=Check out this idea!(***add your idea here***)">
              Send to a friend!
            </Card.Link>
          </Card.Body>
        </Card>
      );
    }
  };

  return (
    <div className={`customized ${typeClass}`}>
      <form onSubmit={displayChoice}>
        <label>Activity Type</label>
        <select name="type" id="type" defaultValue={""} onChange={handleChoice}>
          <option value="" disabled>
            Select
          </option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
        <input type="submit" id="submit" value="See your options!" />
      </form>
      {showCard()}
    </div>
  );
}

export default Type;
