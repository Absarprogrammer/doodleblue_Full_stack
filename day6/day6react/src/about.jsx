import {useNavigate}from 'react-router'
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const About = () => {
    const navigate =useNavigate();
    const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <h2>Hi, I'm Mohammed Absar</h2> 
      <h3>this is my about me page</h3>
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
};

export default About;   