import './Type.css';
import {useState, useEffect} from 'react';

function Type() {  

  return (
      <div className="customized">
        <label>Activity Type</label>
        <select name="type" id="type">
        <option value="" disabled selected hidden>Select</option>
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

export default Type;