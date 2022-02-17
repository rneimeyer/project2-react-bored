import './Favorites.css';
import {useState, useEffect} from 'react';
import Nav from '../Nav/Nav';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Favorites({ favoriteArr, setFavoriteArr }) {  
  const [favoriteData, setFavoriteData] = useState({})

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity?key=5881028")
    .then((response) => response.json())
    .then((data) => setFavoriteData(data))
  }, [])

  const yourFavorites = favoriteArr.map((favorite) => {
    return (
     <div key={favorite.key}>
       <Carousel.Item className="d-block w-100">

         {/* <Carousel.Caption>
       <p>Activity:{favorite.activity}</p>
        <p>Type:{favorite.type}</p>
        <p>Participants:{favorite.participants}</p>
        <p>Price:{favorite.price}</p>
        <p>Accessibility:{favorite.accessibility}</p>
        </Carousel.Caption>  */}
        <Card style={{width: '18rem'}} className="mx-auto">
          <Card.Body>
        <Card.Title>{favorite.activity}!</Card.Title>
        <Card.Subtitle>{favorite.type} activity </Card.Subtitle><br/>
        <Card.Text>{favorite.participants} participant(s)</Card.Text>
        <Card.Text>Price Range:</Card.Text>
        <ProgressBar variant="success" now={favorite.price*100} /><br/>
        <Card.Text>Accessibility Range:</Card.Text>
        <ProgressBar now={favorite.accessibility*100} /><br/>
        </Card.Body>
    </Card>

        </Carousel.Item>
     </div>
    )
  })

  const showArr = () => {
    if (favoriteArr.length===0) {
      return (<p>Set your favorites from the customized page!</p>)
    } else {
      return (
        <div>
          <Carousel>{yourFavorites}</Carousel>
        <button onClick={()=>{setFavoriteArr([])}}>Clear Your Favorites</button>
        </div>)
    }
  }

  return (
    <>
    <Nav />
      <div className="favorites">
        <h2>Fan Favorites</h2>
        <Card style={{width: '18rem'}} className="mx-auto">
      <Card.Body>
        <Card.Title>{favoriteData.activity}!</Card.Title>
        <Card.Subtitle>{favoriteData.type} activity </Card.Subtitle><br/>
        <Card.Text>{favoriteData.participants} participant(s)</Card.Text>
        <Card.Text>Price Range:</Card.Text>
        <ProgressBar variant="success" now={favoriteData.price*100} /><br/>
        <Card.Text>Accessibility Range:</Card.Text>
        <ProgressBar now={favoriteData.accessibility*100} /><br/>
        </Card.Body>
    </Card>
        {/* <h2>Fan Favorites</h2>
        <p>Activity:{favoriteData.activity}</p>
        <p>Type:{favoriteData.type}</p>
        <p>Participants:{favoriteData.participants}</p>
        <p>Price:{favoriteData.price}</p>
        <p>Accessibility:{favoriteData.accessibility}</p> */}
        </div>
        <h2>Your Favorites</h2>
      {showArr()}
        </>
  );
}

export default Favorites;