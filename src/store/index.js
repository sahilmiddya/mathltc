import { configureStore } from "@reduxjs/toolkit";
// import loginslice from "./loginslice";
import authReducer from './authSlice'

const store= configureStore({
    reducer:{
        // form:loginslice.reducer,
        auth: authReducer,
    }
})
export default store