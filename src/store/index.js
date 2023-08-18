import { configureStore } from "@reduxjs/toolkit";
// import loginslice from "./loginslice";
import authReducer from "./authSlice";
import otpReducer from "./otpSlice";
import avatarReducer from './avatarSlice'; // Create this file next

const store = configureStore({
  reducer: {
    // form:loginslice.reducer,
    auth: authReducer,
    otp: otpReducer,
    avatar: avatarReducer,

  },
});
export default store;
