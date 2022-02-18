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
  const [colorTheme,setColorTheme] = useState("")

  return (
    <div className={`App ${colorTheme}`}>
      <main>
        <Routes>
          <Route path="/" element={<Home colorTheme={colorTheme} setColorTheme={setColorTheme} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route
            path="/customized"
            element={
              <Customized
                favoriteArr={favoriteArr}
                setFavoriteArr={setFavoriteArr}
                colorTheme={colorTheme}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteArr={favoriteArr}
                setFavoriteArr={setFavoriteArr}
                colorTheme={colorTheme}
              />
            }
          />
          <Route path="/contact" element={<Contact colorTheme={colorTheme} />} />
          <Route path="/about" element={<About colorTheme={colorTheme} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
