import  { NavLink } from 'react-router-dom';
import'./homepage.css';

const HomePage = () => (
  <div>
      <NavLink to="/login" className="link">
        <button>Log in</button>  </NavLink>
      <NavLink to="/register" className= "link">
        <button>Register</button>
      </NavLink>
  </div>
) 

export default HomePage;