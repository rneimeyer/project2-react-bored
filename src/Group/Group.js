import "./Group.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

function Group({ groupClass, favoriteArr, setFavoriteArr }) {
  const [choice, setChoice] = useState("");
  const [groupData, setGroupData] = useState({});

  const handleChoice = (event) => {
    setChoice(event.target.value);
  };
  const displayChoice = (event) => {
    event.preventDefault();
    fetch(`http://www.boredapi.com/api/activity?participants=${choice}`)
      .then((response) => response.json())
      .then((data) => setGroupData(data));
  };

  const addToFavorites = (favorite) => {
    const favoritesCopy = [...favoriteArr];
    favoritesCopy.push(favorite);
    setFavoriteArr(favoritesCopy);
  };

  const handleClick = (event) => {
    event.preventDefault();
    addToFavorites(groupData);
  };

  const showCard = () => {
    if (groupData.activity === undefined) {
      return <div>Make your choice above to see your options!</div>;
    } else {
      return (
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Body>
            <Card.Title>{groupData.activity}!</Card.Title>
            <Card.Subtitle>{groupData.type} activity </Card.Subtitle>
            <br />
            <Card.Text>{groupData.participants} participant(s)</Card.Text>
            <Card.Text>Price Range:</Card.Text>
            <ProgressBar variant="success" now={groupData.price * 100} />
            <br />
            <Card.Text>Accessibility Range:</Card.Text>
            <ProgressBar now={groupData.accessibility * 100} />
            <br />
            <Button onClick={handleClick}>Add to Your Favorites!</Button>
            <br />
            <Button onClick={displayChoice}>Refresh</Button>
            <br />
            <Card.Link href="mailto:yourfriend@email.com?subject=Activity Idea!&body=Check out this idea!(add your idea here)">
              Send to a friend!
            </Card.Link>
          </Card.Body>
        </Card>
      );
    }
  };
  return (
    <div className={`customized ${groupClass}`}>
      <form onSubmit={displayChoice}>
        <label>Group Number</label>
        <select
          name="participants"
          id="participants"
          defaultValue={""}
          onChange={handleChoice}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="submit" value="See your options!" />
      </form>
      {showCard()}
    </div>
  );
}

export default Group;
