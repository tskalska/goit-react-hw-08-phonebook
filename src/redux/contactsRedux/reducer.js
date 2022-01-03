import {createReducer} from '@reduxjs/toolkit';
import { filterContacts } from './actions';
import {fetchContacts, addContact, deleteContact} from './operations';


export const contactsReducer = createReducer([], builder => {
    builder.addCase(fetchContacts.fulfilled, (_, action) => action.payload)
    builder.addCase(addContact.fulfilled, (state, action) => [...state, action.payload])
    builder.addCase(deleteContact.fulfilled, (state, action) => [...state.filter(contact => contact.id !== action.payload.id)])
})


export const loadingReducer = createReducer(false, {
    [fetchContacts.pending]: ()=> true,
    [fetchContacts.fulfilled]: ()=> false,
    [fetchContacts.rejected]: ()=> false,
    [addContact.pending]: ()=> true,
    [addContact.fulfilled]: ()=> false,
    [addContact.rejected]: ()=> false,
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