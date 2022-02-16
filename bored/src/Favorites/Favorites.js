import './Favorites.css';
import {useState, useEffect} from 'react';
import Nav from '../Nav/Nav';
import Carousel from 'react-bootstrap/Carousel'

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
       <Carousel.Item className="d-bloock w-100">
         <Carousel.Caption>
       <p>Activity:{favorite.activity}</p>
        <p>Type:{favorite.type}</p>
        <p>Participants:{favorite.participants}</p>
        <p>Price:{favorite.price}</p>
        <p>Accessibility:{favorite.accessibility}</p>
        </Carousel.Caption>
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
        <p>Activity:{favoriteData.activity}</p>
        <p>Type:{favoriteData.type}</p>
        <p>Participants:{favoriteData.participants}</p>
        <p>Price:{favoriteData.price}</p>
        <p>Accessibility:{favoriteData.accessibility}</p>
        </div>
        <h2>Your Favorites</h2>
      {showArr()}
        </>
  );
}

export default Favorites;