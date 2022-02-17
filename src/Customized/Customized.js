import "./Customized.css";
import { useState } from "react";
import Group from "../Group/Group";
import Type from "../Type/Type";
import Nav from "../Nav/Nav";

function Customized({ favoriteArr, setFavoriteArr }) {

  const showGroup = () => {
    setGroupActive(true)
    setTypeActive(false)
  };

  const showType = () => {
    setGroupActive(false)
    setTypeActive(true)
  };
  const clear = () => {
    setGroupActive(false)
    setTypeActive(false)
  }

  const [groupActive, setGroupActive] = useState(false);
  const [typeActive, setTypeActive] = useState(false);
  const groupClass = groupActive ? "active" : "inactive";
  const typeClass = typeActive ? "active" : "inactive";

  return (
    <>
    <Nav />
    <div className="customized">
      <h2>Make your choice!</h2>
      <button onClick={showGroup}>By Group Number</button>
      <button onClick={showType}>By Activity Type</button>
      <button onClick={clear}>Clear</button>
      <Group groupClass={groupClass} favoriteArr={favoriteArr} setFavoriteArr={setFavoriteArr} />
      <Type typeClass={typeClass} favoriteArr={favoriteArr} setFavoriteArr={setFavoriteArr} />
    </div>
    </>
  );
}

export default Customized;
