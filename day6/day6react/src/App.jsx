import { useNavigate } from "react-router";
import './index.css';
const App = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      App
      <button onClick={() => navigate("/user")}>
        Users
      </button>
      <button onClick={()=>navigate("/about")}>About</button>
      <button onClick={()=>navigate("/contact")}>Contact</button>
    </div>
  );
};

export default App;