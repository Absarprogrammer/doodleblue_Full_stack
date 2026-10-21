import {useNavigate}from 'react-router'

const About = () => {
    const navigate =useNavigate();
  return (
    <div>
      <h2>Hi, I'm Mohammed Absar</h2> 
      <h3>this is my about me page</h3>
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
};

export default About;   