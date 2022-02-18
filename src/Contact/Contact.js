import "./Contact.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Contact({ colorTheme }) {
  return (
    <div className="page-container">
      <Nav colorTheme={colorTheme} />
      <div className={`contact ${colorTheme}`}>
        <h2>Contact Us!</h2>
        <form className="form">
          <input type="text" id="name" placeholder="Name*" required></input>
          <input type="email" id="email" placeholder="Email*" required></input>
          <textarea
            id="textbox"
            placeholder="Feedback*"
            
            required
          ></textarea>
          <input type="submit" id="submit" value="Submit"></input>
        </form>
      </div>
      <Footer colorTheme={colorTheme} />
    </div>
  );
}

export default Contact;
