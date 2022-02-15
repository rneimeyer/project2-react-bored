import './About.css';
import {useState, useEffect} from 'react';

function About() {  
  return (
      <div className="about">
        <h2>About the Creator</h2>
        <p>Hi! My name is Rebecca Neimeyer, and I developed this project to showcase my knowledge of React and rendering data from an API. I hope this helps you find a fun activity to do when you are bored!</p>
        <p>Please feel free to get in touch with me via email or LinkedIn</p>
      </div>
  );
}

export default About;