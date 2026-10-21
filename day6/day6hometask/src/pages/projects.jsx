
import { useNavigate } from "react-router";
import project1 from "../images/gearshift.png";
import project2 from "../images/krikalan.jpg";
import "../styles/project.css";

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <h1>Projects</h1>

      <div className="container">
        {/* GearShift */}
        <div className="card">
          <p className="eyebrow">MERN Stack · Feb 2026</p>
          <h3>GearShift – Motorcycle Ride Management Platform</h3>

          <div className="preview">
            <img src={project1} alt="GearShift project dashboard" />
        

          <div className="preview-info">
           <ul>
  <li>
    Developed a full-stack ride management platform using MongoDB,
    Express.js, React.js, and Node.js.
  </li>
  <li>
    Implemented JWT authentication, ride creation, ride joining,
    and REST APIs.
  </li>
  <li>
    Integrated bcrypt for secure password hashing and user authentication.
  </li>
  <li>
    Implemented email notifications using Nodemailer for registration,
    ride creation, and ride-joining requests.
  </li>
  <li>
    Integrated Google Maps API to help users discover nearby motorcycle routes.
  </li>
</ul>

            <button onClick={() => navigate("/contact")}>
              Ask me about this project
            </button></div>
          </div>
        </div>

        {/* Krikalan */}
        <div className="card">
          <p className="eyebrow">Frontend Development · Oct 2025</p>
          <h3>Krikalan Travel Website</h3>

          <div className="preview">
            <img src={project2} alt="Krikalan travel website" />
          

          <div className="preview-info">
            <ul>
              <li>
  Built a responsive travel website using HTML5, CSS3,
  and JavaScript.
</li>
<li>
  Designed booking forms and responsive layouts for
  an improved user experience.
</li>
<li>
  Created structured web pages to showcase travel
  destinations and tourism-related information.
</li>
<li>
  Implemented interactive UI elements using JavaScript
  to improve user engagement.
</li>
<li>
  Used CSS Flexbox and Grid to organize page layouts
  and maintain consistent styling.
</li>
<li>
  Added form input fields to collect customer and
  travel booking details.
</li>
<li>
  Improved navigation and content organization to
  make the website easy to use.
</li>
            </ul>

            <button onClick={() => navigate("/contact")}>
              Ask me about this project
            </button>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
