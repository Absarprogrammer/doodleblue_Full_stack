import "../styles/internship.css";

const Internship = () => {

  return (
    <div className="internship-page">
      <h1>Internship Experience</h1>

      <div className="internship-card">
        <div className="internship-header">
          <h3>Software Development Intern</h3>
          <div className="internship-date">
            Chennai Port Authority | May 2026 – June 2026
          </div>
        </div>

        <ul>
          <li>
            Developed a web-based application for managing port operations,
            including vessel scheduling, cargo tracking, and berth allocation.
          </li>
          <li>
            Developed a MERN stack ticket management system for tracking
            and managing support requests.
          </li>
          <li>
            Implemented user authentication and role-based access control.
          </li>
          <li>
            Built ticket creation, assignment, and status update modules
            to streamline support workflows.
          </li>
          <li>
            Gained practical experience in full-stack development,
            application design, and database integration.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Internship;