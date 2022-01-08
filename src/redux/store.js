import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import {contactsReducer, filterReducer, loadingReducer, errorsReducer} from './contactsRedux/reducer'
import authReducer from './auth/auth-reducer';
const rootReducer = combineReducers({
    auth: authReducer,
    // contacts: contactsReducer,
    // filter: filterReducer,
    // isLoading: loadingReducer,
    // error: errorsReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
})

export default store;   