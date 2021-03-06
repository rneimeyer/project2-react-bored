import "./Favorites.css";
import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";

function Favorites({ favoriteArr, setFavoriteArr, colorTheme }) {
  const [favoriteData, setFavoriteData] = useState({});
  const [secondFavorite, setSecondFavorite] = useState({});
  const [thirdFavorite, setThirdFavorite] = useState({});

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity?key=5881028")
      .then((response) => response.json())
      .then((data) => setFavoriteData(data));
  }, []);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity?key=5490351")
      .then((response) => response.json())
      .then((data) => setSecondFavorite(data));
  }, []);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity?key=9765530")
      .then((response) => response.json())
      .then((data) => setThirdFavorite(data));
  }, []);

  const yourFavorites = favoriteArr.map((favorite) => {
    return (
      <div key={favorite.key}>
        <Card style={{ width: "15rem" }} className="mx-auto card">
          <Card.Body>
            <Card.Title>{favorite.activity}!</Card.Title>
            <Card.Subtitle>{favorite.type} activity </Card.Subtitle>
            <br />
            <Card.Text>{favorite.participants} participant(s)</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  const showArr = () => {
    if (favoriteArr.length === 0) {
      return <p>Set your favorites from the customized page!</p>;
    } else {
      return (
        <div>
          <div className="faves">{yourFavorites}</div>
          <button
            className={`favorite-button ${colorTheme}`}
            onClick={() => {
              setFavoriteArr([]);
            }}
          >
            Clear Your Favorites
          </button>
        </div>
      );
    }
  };

  return (
    <div className="page-container">
      <Nav colorTheme={colorTheme} />
      <div className="all-faves">
        <div className={`favorites ${colorTheme}`}>
          <h2 className="favorite-titles">Fan Favorites</h2>
          <div className="cards">
            <Card style={{ width: "15rem" }} className="mx-auto first">
              <Card.Body>
                <Card.Title>{favoriteData.activity}!</Card.Title>
                <Card.Subtitle>{favoriteData.type} activity </Card.Subtitle>
                <br />
                <Card.Text>
                  {favoriteData.participants} participant(s)
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "15rem" }} className="mx-auto second">
              <Card.Body>
                <Card.Title>{secondFavorite.activity}!</Card.Title>
                <Card.Subtitle>{secondFavorite.type} activity </Card.Subtitle>
                <br />
                <Card.Text>
                  {secondFavorite.participants} participant(s)
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "15rem" }} className="mx-auto third">
              <Card.Body>
                <Card.Title>{thirdFavorite.activity}!</Card.Title>
                <Card.Subtitle>{thirdFavorite.type} activity </Card.Subtitle>
                <br />
                <Card.Text>
                  {thirdFavorite.participants} participant(s)
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className={`your-faves ${colorTheme}`}>
          <h2 className="favorite-titles">Your Favorites</h2>
          {showArr()}
        </div>
      </div>
      <Footer colorTheme={colorTheme} />
    </div>
  );
}

export default Favorites;
