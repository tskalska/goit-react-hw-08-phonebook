import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const contacts = await fetchData();
    return contacts;
    }
)




async function addData(name, phone){
    const response = await fetch('https://61ca307a20ac1c0017ed8ff4.mockapi.io/contacts/contacts',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
        })
    })

    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not added'));
}

export const addContact = createAsyncThunk('contacts/addContact', async ({name, number}) => {
    const contacts = await addData(name, number);
    return contacts;
    }
)




async function deleteData(contactId){
    console.log(contactId);
    const response = await fetch(`https://61ca307a20ac1c0017ed8ff4.mockapi.io/contacts/contacts/${contactId}`,
    {
        method: 'DELETE',
        headers: {
       
        },
        body: JSON.stringify({
            id: contactId,
        })
    })

    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not deleted'));
}

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    const contacts = await deleteData(id);
    return contacts;
    }
)