import {createReducer} from '@reduxjs/toolkit';
import {addContact, deletContact, filterContacts} from './actions';
import {fetchContacts} from './operations';

// const initContactsState = {
//     contacts:[],
// }

export const contactsReducer = createReducer([],{
        [fetchContacts.fulfilled]: (state, {payload}) => payload,
        [addContact.type]: (state, {payload}) => {
            console.log(state)
            return state}
            ,
        [deletContact.type]: (state, {payload}) => {
            // console.log('state: ', state.contacts);
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.name !== payload)
            }
        }
})

export const loadingReducer = createReducer(false, {
    [fetchContacts.pending]: ()=> true,
    [fetchContacts.fulfilled]: ()=> false,
    [fetchContacts.rejected]: ()=> false,
})

export const errorsReducer = createReducer(null,{
    [fetchContacts.rejected]: (_,{payload})=> payload,
    [fetchContacts.pending]: ()=> null,

})

export const filterReducer = createReducer('', {
    [filterContacts.type]: (state, {payload}) => {
        return payload;
    }
} )

// ----------- RECDUX ----------


// export const filterReducer = (state = '', action) => {
//     switch (action.type) { 
//         case FILTER_CONTACTS:
//             return action.payload;
        
//         default:
//             return state;
//     }
// }

// const CONTACTS_INIT_STATE = {
//     contacts:[],
//     error: '',
// }


// export const contactsReducer = (state = CONTACTS_INIT_STATE, action) => {
//     switch (action.type) {

//         case ADD_CONTACT:
//             if (state.contacts.some(contact => contact.name.toLowerCase()===action.payload.name)){
//                 return {
//                     ...state,
//                     error: `The name ${action.payload.name} already exists.`
//                 }
//             } else {
//                 return {
//                     ...state,
//                     contacts: [...state.contacts, {
//                         name: action.payload.name,
//                         number: action.payload.number
//                     }]
//                 }
//             }
            
//         case DELET_CONTACT:
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.name !== action.payload)
//             }
        
//         default:
//             return state;
//     }
// };
