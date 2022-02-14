import './Customized.css';
import {useState, useEffect} from 'react';

function Customized() {  

  return (
      <div className="customized">
        <h2>Make your choice!</h2>
        <label>Participants</label>
        <select id="participants">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label>Type</label>
        <select id="type">
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
      </div>
  );
}

export default Customized;
