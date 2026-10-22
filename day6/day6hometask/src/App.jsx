import { useNavigate } from "react-router";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-hero">
        <p className="hero-eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Mohammed Absar</span>
        </h1>

        <h2>Aspiring Full-Stack Developer</h2>

        <p className="hero-description">
          I'm a final-year Computer Science Engineering student passionate
          about building responsive web applications, solving problems,
          and transforming ideas into practical digital experiences.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/projects")}>
            Explore My Projects 
          </button>

          <button
            className="outline-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div className="home-intro">
        <div>
          <p className="div-eyebrow">A LITTLE ABOUT ME</p>
          <h2>Building ideas into reality.</h2>
        </div>

        <p>
          I enjoy developing modern web applications and learning new
          technologies. Through hands-on projects, I have explored
          frontend development, backend APIs, database integration,
          and authentication. I'm continuously improving my skills
          to become a capable full-stack developer.
        </p>

        <button
          className="text-btn"
          onClick={() => navigate("/about")}
        >
          More About Me 
        </button>
      </div>

      <div className="home-cta">
        <p className="div-eyebrow">LET'S CONNECT</p>
        <h2>Ready to build something meaningful?</h2>
        <p>
          I'm eager to learn, collaborate, and contribute to
          exciting software development opportunities.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/contact")}>
            Get In Touch 
          </button>

          <button
            className="outline-btn"
            onClick={() => navigate("/internship")}
          >
            My Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;