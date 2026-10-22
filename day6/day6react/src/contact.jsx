import { useNavigate } from 'react-router';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
const Contact = () => {
    const navigate=useNavigate();
    const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <div className={`app${theme}`}>
      <button onClick={toggleTheme}>{theme==="light"?"dark":"light"}</button>
      <h1>Phone:</h1><p>7823964790</p>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Contact;