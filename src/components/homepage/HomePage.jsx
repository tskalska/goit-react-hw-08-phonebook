import  { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';

const HomePage = () => (
  <div className={style.homePageContainer}>
    <NavLink to="/login" className="link">
        <button className={style.button}>Log in</button>  </NavLink>
      <NavLink to="/register" className= "link">
        <button className={style.button}>Register</button>
      </NavLink>
  </div>
) 

export default HomePage;