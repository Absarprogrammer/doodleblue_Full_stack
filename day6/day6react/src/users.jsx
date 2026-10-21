import { useNavigate } from 'react-router';
const Users = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Welcome, To Users page</h1>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Users;