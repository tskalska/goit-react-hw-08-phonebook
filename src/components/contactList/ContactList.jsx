import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {addContact, deletContact} from '../../redux/contactsRedux/actions';
import { fetchContacts } from  '../../redux/contactsRedux/operations';

export default function ContactList (){
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)


  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])

  // fetchContacts();

  console.log(contacts);


  

  const filteredList = contacts.filter(contact => contact.name.includes(filter))
  
  return ( 
  <div>
    {!contacts && <span>У вас нет контактов!</span>}
    {contacts &&
    <div>
      <h2>Contacts: </h2><br />
      <ul>{filteredList.map(contact =>
        <li key={uuidv4()}>
          {contact.name} : {contact.phone}
          <button type="button" onClick={ () => dispatch(deletContact(contact.name))}>
            Delete
          </button>
        </li>
        )}
      </ul>
    </div>
    }
  </div>)
}
