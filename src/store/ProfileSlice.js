import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
const profileslice = createSlice({
  name: "profiledetails",
  initialState: { user: null },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {userprofile} = profileslice.actions;

export default profileslice.reducer;
