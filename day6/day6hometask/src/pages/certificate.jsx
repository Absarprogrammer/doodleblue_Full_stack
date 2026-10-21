import "../styles/certificate.css";

const Certificates = () => {
  return (
    <div className="certificates-page">
      <h1>Certificates</h1>

      <div className="certificates-container">
        <div className="certificate-card">
          <h3>Programming in Java</h3>
          <p>NPTEL</p>
        </div>

        <div className="certificate-card">
          <h3>Human-Computer Interaction</h3>
          <p>NPTEL</p>
        </div>

        <div className="certificate-card">
          <h3>Frontend Development</h3>
          <p>Infosys</p>
        </div>

        <div className="certificate-card">
          <h3>Python</h3>
          <p>HackerRank</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;