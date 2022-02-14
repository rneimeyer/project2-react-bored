import './Contact.css';
import {useState, useEffect} from 'react';

function Contact() {  
  return (
      <div className="contact">
        <h2>Contact Us!</h2>
        <form className="form">
          <input type="text" id="name" placeholder="Name*" required></input>
          <input type="email" id="email" placeholder="Email*" required></input>
          <textarea id="textbox" placeholder="Feedback*" rows="10" column="10" required></textarea>
          <input type="submit" id="submit" value="Submit"></input>
        </form>
      </div>
  );
}

export default Contact;