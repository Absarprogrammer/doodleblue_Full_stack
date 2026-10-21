import {useNavigate} from 'react-router'

const App=()=>{
  const navigate=useNavigate();
  return(
    <>
    <button onClick={()=>navigate('/about')}>About</button>
    <button onClick={()=>navigate('/about')}>About</button>
    <button onClick={()=>navigate('/certificate')}>Certifications</button>
    <button onClick={()=>navigate('/contact')}>Contact</button>
    <button onClick={()=>navigate('/education')}>Education</button>
    <button onClick={()=>navigate('/internship')}>Internships</button>
    <button onClick={()=>navigate('/projects')}>Projects</button>
    <button onClick={()=>navigate('/skills')}>Skills</button>
    </>
  )
}
export default App