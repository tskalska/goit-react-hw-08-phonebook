
import {useDispatch, useSelector} from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import style from './UserMenu.module.css';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import'./usermenu.css';


export default function UserMenu() {

    const dispatch = useDispatch('');

    const navigate = useNavigate();

    const name = useSelector(state => state.auth.user.name);
    const email = useSelector(state => state.auth.user.email); 

    return (
        <div className={style.container}>
            <div className={style.containerMenu}>
                <span className={style.userName}>Welcome, {name}! </span>
                <ul className={style.linkList}>
                    <li><NavLink className={style.link} to="/usermenu" end> Home </NavLink></li>
                    <li><NavLink className={style.link} to= {'contacts'}> Contacts </NavLink></li>
                </ul>
                <span className={style.userEmail}>{email}</span>
                <button 
                    className={style.buttonExit} 
                    type="button" 
                    onClick={() => {
                        dispatch(authOperations.logOut());
                        navigate('/')}}>
                            Выйти
                </button>
            </div>
            <Outlet />
        </div>
    );
}