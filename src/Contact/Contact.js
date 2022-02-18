import "./Contact.css";
import Nav from "../Nav/Nav";

function Contact({ colorTheme }) {
  return (
    <>
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
    </>
  );
}

export default Contact;
