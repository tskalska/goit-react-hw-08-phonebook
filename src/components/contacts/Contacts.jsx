import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import { fetchContacts, deleteContact } from  '../../redux/contactsRedux/operations';

export default function Contacts (){
  
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);


//   useEffect(()=>{
//     dispatch(fetchContacts());
//   }, [dispatch])
  

//   const filteredList = contacts.filter(contact => contact.name.includes(filter))
  
  return ( 
  <div>
      Contacts: 
    {/* {!contacts && <span>У вас нет контактов!</span>}
    {contacts &&
    <div>
      <h2>Contacts: </h2><br />
      <ul>{filteredList.map(contact =>
        <li key={uuidv4()}>          
          {contact.name} : {contact.phone}
          <button type="button" onClick={ () => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
        )}
      </ul>
    </div>
    } */}
  </div>)
}