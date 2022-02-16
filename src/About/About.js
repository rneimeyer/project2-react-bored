import './About.css';
import {useState, useEffect} from 'react';
import Nav from '../Nav/Nav';
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

function About() {  
  return (
    <>
    <Nav />
      <div className="about">
        <h2>About the Creator</h2>
        <p>Hi! My name is Rebecca Neimeyer, and I developed this project to showcase my knowledge of React and rendering data from an API. I hope this helps you find a fun activity to do when you are bored!</p>
        <p>Please feel free to get in touch with me via email or LinkedIn</p>
        <h2>Activity Card Key</h2>
        <Card style={{width: '18rem'}} className="mx-auto">
          <Card.Body>
        <Card.Title>Activity Description!</Card.Title>
        <Card.Subtitle>type of activity </Card.Subtitle><br/>
        <Card.Text>Number of participant(s)</Card.Text>
        <Card.Text>Price Range: How much does this cost on a scale of 1-10? Below shows a 5/10 on the scale.</Card.Text>
        <ProgressBar variant="success" now={50} /><br/>
        <Card.Text>Accessibility Range: How easy is this to accomplish on a scale of 1-10? Below shows a 5/10 on the scale.</Card.Text>
        <ProgressBar now={50} />
        </Card.Body>
    </Card>
      </div>
      </>
  );
}

export default About;