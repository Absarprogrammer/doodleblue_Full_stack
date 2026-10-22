import { useNavigate } from "react-router";
import photo from '../images/profile.png'
const Sidebar=() =>{
    const navigate=useNavigate()
  return (
    <div className="sidebar">
      <h2>Mohammed Absar</h2>
    <img src={photo} alt="Profile"/><br/><br/>
      <div>
        <button onClick={()=>navigate("/about")} >About</button><br/><br/>
        <button onClick={()=>navigate("/projects")} >Projects</button><br/><br/>
        <button onClick={()=>navigate("/skills")}>Skill</button><br/><br/>
        <button onClick={()=>navigate("/internship")}>Internships</button><br/><br/>
        <button onClick={()=>navigate("/education")}>Education</button><br/><br/>
        <button onClick={()=>navigate("/certificate")}>Certificates</button><br/><br/>
        <button onClick={()=>navigate("/contact")}>Contacts</button><br/><br/>

      </div>
    </div>
  );
}

export default Sidebar;