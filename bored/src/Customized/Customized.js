import "./Customized.css";
import { useState, useEffect } from "react";
import Group from "../Group/Group";
import Type from "../Type/Type";

function Customized() {
  const showGroup = () => {
    <Group />;
  };

  const showType = () => {
    return <Type />;
  };

  return (
    <div className="customized">
      <h2>Make your choice!</h2>
      <button onClick={showGroup}>By Group Number</button>
      <button onClick={showType}>By Activity Type</button>
      <Group />
      <Type />
    </div>
  );
}

export default Customized;
