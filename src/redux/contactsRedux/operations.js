import { createAsyncThunk } from '@reduxjs/toolkit';
// import {fetchContactsRequst, fetchContactsSuccess, fetchContactsError} from './actions';


// export const fetchContacts = () => async dispatch => {
//     dispatch (fetchContactsRequst);

//     try{ 
//         const contacts = await fetchData();
//         dispatch(fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(fetchContactsError(error));
//     };
// }


async function fetchData(){
    const response = await fetch('https://61ca307a20ac1c0017ed8ff4.mockapi.io/contacts/contacts');
    console.log(response);
    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const contacts = await fetchData();
    console.log (contacts);
    return contacts;
    }
)