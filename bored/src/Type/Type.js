import "./Type.css";
import { useState, useEffect } from "react";

function Type({ typeClass }) {
  const [choice, setChoice] = useState("");
  const [typeData, setTypeData] = useState({});

  const handleChoice = (event) => {
    setChoice(event.target.value);
  };
  const displayChoice = (event) => {
    event.preventDefault();
    fetch(`http://www.boredapi.com/api/activity?type=${choice}`)
      .then((response) => response.json())
      .then((data) => setTypeData(data));
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
      <input type="submit" value="See your options!" />
      </form>
      <div>
        <p>Activity: {typeData.activity}</p>
        <p>Type: {typeData.type}</p>
        <p>Participants: {typeData.participants}</p>
        <p>Price: {typeData.price}</p>
        <p>Accessibility: {typeData.accessibility}</p>
      </div>
      <button onClick={displayChoice}>Refresh</button>
      <a href = 'mailto:yourfriend@email.com?subject=Activity Idea!&body=${typeData}'>Send to your friend!</a>
    </div>
  );
}

export default Type;
