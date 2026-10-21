import { useNavigate } from "react-router";
import '../styles/about.css'
import resume from '../assets/resume.pdf'
const About=()=>{
    const navigate=useNavigate();
    return(
        <>
        <h1>About me</h1>
         <div className="container">
            <div className="card">
            <p>
                I'm a final-year Computer Science Engineering student passionate about full-stack development and building real-world applications.
                I enjoy exploring new technologies, solving problems, and turning ideas into functional, user-friendly digital experiences. 
                I have experience working with HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB through hands-on projects. 
                I’m continuously improving my technical skills, learning modern development practices, and building applications that combine creativity with functionality. 
                My goal is to become a skilled full-stack developer, contribute to impactful projects, and grow as a software engineer in a collaborative professional environment.
            </p>
<br/>
            
                <div className="actions">
                <button onClick={()=>navigate('/projects')}>View Projects</button><br/>
                <a href={resume} target="_blank"><button>View Resume</button> </a>
            </div>
        </div>

        
        </div>
        </>
    )
}
export default About;