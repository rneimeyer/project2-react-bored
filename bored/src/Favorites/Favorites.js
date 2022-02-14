import './Favorites.css';
import {useState, useEffect} from 'react';

function Favorites() {  
  const [favoriteData, setFavoriteData] = useState({})

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity?key=5881028")
    .then((response) => response.json())
    .then((data) => setFavoriteData(data))
  })
  return (
      <div className="favorites">
        <h2>Favorites</h2>
        <p>Activity:{favoriteData.activity}</p>
        <p>Type:{favoriteData.type}</p>
        <p>Participants:{favoriteData.participants}</p>
        <p>Price:{favoriteData.price}</p>
        <p>Accessibility:{favoriteData.accessibility}</p>
        </div>
  );
}

export default Favorites;