import {createAction} from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', function prepare({name, number}){
    return {
        payload: {
            name:name,
            number:number,
        },
    }  
});

export const fetchContactsRequst = createAction('contacts/fetchContactsRequst');

export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

export const fetchContactsError = createAction('contacts/fetchContactsError');

export const deletContact = createAction('contacts/delet');

export const filterContacts = createAction('constcts/filter');






// ----------- RECDUX ----------

// export function addContact({ name, number}) {
//     return { type: ADD_CONTACT, payload:{ name, number }}
// }

// export function deletContact(name) {
//     return { type: DELET_CONTACT, payload: name }
// }


// export function filterContacts(value) {
//     return {type: FILTER_CONTACTS, payload: value }
// }