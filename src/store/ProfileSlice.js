import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const profileslice = createSlice({
  name: "profiledetails",
  initialState: { user: null, wardrobeModalOpen: false },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
    setWardrobeModalOpen:(state,action) =>{
      state.wardrobeModalOpen= !state.wardrobeModalOpen;
    }
  },
});

export const { userprofile ,setWardrobeModalOpen} = profileslice.actions;

export default profileslice.reducer;
