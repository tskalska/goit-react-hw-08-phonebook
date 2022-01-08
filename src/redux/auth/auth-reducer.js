import { createSlice} from "@reduxjs/toolkit";
import authOperations from './auth-operations';

const initialState = {
    user: { name:null, email:null },
    token: null, 
    isRegistered: false,
    isLoggedIn: false,
};

const authSlice = createSlice ({
    name:  'auth',
    initialState,
    extraReducers:{
        [authOperations.register.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isRegistered = true;
          state.isLoggedIn = false;
        },
        [authOperations.logIn.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isRegistered = false;
          state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state, action) {
          state.user = { name: null, email: null };
          state.token = null;
          state.isRegistered = false;
          state.isLoggedIn = false;
        },
        // [authOperations.fetchCurrentUser.fulfilled](state, action) {
        //   state.user = action.payload;
        //   state.isLoggedIn = true;
        // },
      }
})

export default authSlice.reducer;