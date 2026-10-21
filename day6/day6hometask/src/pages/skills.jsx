
import skills from "../images/skills.png";
import "../styles/skills.css";

const Skill = () => {

  return (
    <div className="skills-page">
      <h1>Skills</h1>
      <h2>Technologies I Work With</h2>

      <p>
        I'm building my expertise in modern web technologies
        and continuously learning tools and frameworks to create
        responsive, reliable, and user-friendly applications.
      </p>

      <div className="skills-container">
        <div className="skills-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Programmin Skills</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
                      </ul>
        </div></div>
        <br/><br/>
        <div className="skills-card2">
          <img src={skills} alt="Illustration of my technical skills" />
        </div>
    </div>
  );
};

export default Skill;