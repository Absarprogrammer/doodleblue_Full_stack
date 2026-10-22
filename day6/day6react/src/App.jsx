
import { useNavigate } from "react-router";
import { useContext } from "react";
import "./index.css";
import ThemeContext from "./context/ThemeContext.jsx";

const App = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <h1>App</h1>

      <button onClick={() => navigate("/user")}>
        Users
      </button>

      <button onClick={() => navigate("/about")}>
        About
      </button>

      <button onClick={() => navigate("/contact")}>
        Contact
      </button>
    </div>
  );
};

export default App;
