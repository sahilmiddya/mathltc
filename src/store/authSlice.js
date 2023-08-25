// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  userEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { loginUser, logoutUser ,setEmail} = authSlice.actions;

export default authSlice.reducer;
