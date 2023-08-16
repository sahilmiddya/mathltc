import { configureStore } from "@reduxjs/toolkit";
import loginslice from "./loginslice";

const store= configureStore({
    reducer:{
        form:loginslice.reducer
    }
})
export default store