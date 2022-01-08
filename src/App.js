import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import authSelectors from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import {Contacts} from './components/contacts/Contacts';




export default function App() {

  // const error = useSelector((state) => state.contacts.error); 


  // return (
  //   <div>
  //     <h1>Phonebook</h1><br/>
  //     {error && <p style = {{color:'red'}}>{error}</p>}
  //     <Form />
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
const Homepage = lazy(() => import('./components/homepage/HomePage'));
const RegistrationForm = lazy(() => import('./components/registrationform/RegistrationForm' ));
const LoginForm = lazy(() => import('./components/loginform/LoginForm'));
const UserMenu = lazy(() => import('./components/usermenu/UserMenu'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));


  return (
    <div className = {styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={ <Homepage />} />
          <Route exact strict path="/register" element={<RegistrationForm />} />
          <Route exact strict path="/login" element={<LoginForm />} />
          <Route exact strict path="/usermenu" element={<UserMenu />}>
              <Route path="contacts" element={<Contacts />}></Route>
          </Route>

          
        
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Suspense> 
    </div>
    );


}

