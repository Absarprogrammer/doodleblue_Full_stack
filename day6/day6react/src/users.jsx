import { useNavigate } from 'react-router';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
const Users = () => {
    const navigate=useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <h1>Welcome, To Users page</h1>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Users;