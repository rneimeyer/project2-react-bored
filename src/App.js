import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Favorites from "./Favorites/Favorites";
import Customized from "./Customized/Customized";
import Home from "./Home/Home";

function App() {
  const [favoriteArr, setFavoriteArr] = useState([]);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route
            path="/customized"
            element={
              <Customized
                favoriteArr={favoriteArr}
                setFavoriteArr={setFavoriteArr}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteArr={favoriteArr}
                setFavoriteArr={setFavoriteArr}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
