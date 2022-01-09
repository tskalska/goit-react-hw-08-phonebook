import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import { fetchContacts, deleteContact } from  '../../../redux/contacts/contacts-operations';
import style from './ContactList.module.css';

export default function ContactList (){
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);


  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])  

  const filteredList = contacts.filter(contact => contact.name.includes(filter))
  
  return ( 
  <div>
    {contacts.length === 0 && <span className={style.informMessage}>У вас нет контактов!</span>}
    {contacts.length > 0 &&
    <div>
      <h2>Contacts: </h2><br />
      <ul>{filteredList.map(contact =>
        <li className={style.itemContact} key={uuidv4()}>          
          {contact.name} : {contact.number}
          <button className={style.deleteButton} type="button" onClick={ () => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
        )}
      </ul>
    </div>
    }
  </div>)
}