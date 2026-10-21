import { useNavigate } from 'react-router';
const Contact = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Phone:</h1><p>7823964790</p>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Contact;