import "./Group.css";
import { useState, useEffect } from "react";

function Group() {
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

  return (
    <div className="customized">
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
      <div>
        <p>Activity:{groupData.activity}</p>
        <p>Type:{groupData.type}</p>
        <p>Participants:{groupData.participants}</p>
        <p>Price:{groupData.price}</p>
        <p>Accessibility:{groupData.accessibility}</p>
      </div>
    </div>
  );
}

export default Group;
