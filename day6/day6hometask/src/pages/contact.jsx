import phone from "../images/phone.png";
import email from "../images/email.jpg";
import linkedin from "../images/linkedin-app-icon.webp";
import git from "../images/git.png";
import "../styles/contact.css";

const Contact = () => {
 
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Have a question or want to work together? Feel free to reach out!</p>

      <div className="container">
        <div className="card">
          <img src={phone} alt="Phone" />
          <a href="tel:+917823964790">+91 78239 64790</a>
        </div>

        <div className="card">
          <img src={email} alt="Email" />
          <a href="mailto:ramjanakbar72@gmail.com">
            ramjanakbar72@gmail.com
          </a>
        </div>

        <div className="card">
          <img src={linkedin} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/mohammedabsar08"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="card">
          <img src={git} alt="GitHub" />
          <a
            href="https://github.com/Absarprogrammer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;