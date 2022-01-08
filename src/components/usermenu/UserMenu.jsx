
import {useDispatch, useSelector} from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import style from './UserMenu.module.css';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import'./usermenu.css';


export default function UserMenu() {

    const dispatch = useDispatch('');

    // const isRegistered =  useSelector(authSelectors.isRegistered);
    // const logedIn =  useSelector(authSelectors.getIsLoggedIn);
    const navigate = useNavigate();

    const name = useSelector(state => state.auth.user.name);
    const email = useSelector(state => state.auth.user.email); 

    return (
        <div className={style.container}>
            <span>Welcome, {name}! </span>
            <ul>
                <li><NavLink className="link" exact strict to="/usermenu" end> Home </NavLink></li>
                <li><NavLink className="link" exact strict to= {'contacts'}> Contacts </NavLink></li>
            </ul>
            <span className={style.email}>{email}</span>
            <button 
                className={style.button} 
                type="button" 
                onClick={() => {
                    dispatch(authOperations.logOut());
                    navigate('/')}}>
                        Выйти
            </button>
            <Outlet />
        </div>
    );
}