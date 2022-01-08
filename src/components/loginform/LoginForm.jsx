import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';


const LoginForm = () => {

    const [email, setEmail]=useState('');
    const  [password, setPassword] = useState ('');
    const isRegistered =  useSelector(authSelectors.isRegistered);
    const logedIn =  useSelector(authSelectors.getIsLoggedIn);




    const dispatch = useDispatch('');
    const navigate = useNavigate();


    // const [error, setError]=useState('');
    
    // const contacts = useSelector(state => state.contacts)
    
    const handleChange = (event) => {
        const {name, value} = event.target;
    
        switch (name) {
        case 'email':
            setEmail(value);
            break;
    
        case 'password':
            setPassword(value);
            break;
            
        default: return;
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperations.logIn({email, password}));
        setEmail('');
        setPassword(''); 
        event.target.reset();
    }

    useEffect(() => { 
        if (logedIn) {
          navigate ('/usermenu') 
        }
      }, [logedIn, navigate]);


    
    return (
        <div className = {styles.formContainer}>
            {isRegistered ? <div>  Congratulations, your account has been successfully created. Please, log in :)</div>: ''}
            <form onSubmit = {handleSubmit} className={styles.form}>
            <label>
                E-mail:
                <input 
                    type="email"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Invalid email address"
                    required
                    onChange={handleChange}
                    className = {styles.formInput}
                >
                </input>
                </label>
                <label>
                Password:
                <input 
                    type="text"
                    name="password"
                    required
                    onChange={handleChange}
                    className = {styles.formInput}
                >
                </input>
                </label>
                <button className={styles.formButton}>Log in</button>
            </form>
        {/* {error && <span className={styles.error}>This name already exists.</span> } */}
        </div>
    ); 
}

LoginForm.propTypes = {
    onSubmit: PropTypes.any,
}
  
  export default LoginForm;