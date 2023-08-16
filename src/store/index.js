import { configureStore } from "@reduxjs/toolkit";
// import loginslice from "./loginslice";
import authReducer from "./authSlice";
import otpReducer from "./otpSlice";

const store = configureStore({
  reducer: {
    // form:loginslice.reducer,
    auth: authReducer,
    otp: otpReducer,
  },
});
export default store;
