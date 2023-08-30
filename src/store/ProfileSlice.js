import { createSlice } from "@reduxjs/toolkit"; 

const profileslice = createSlice({
  name: "profiledetails",
  initialState: { user: null, wardrobeModalOpen: false },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
    setWardrobeModalOpen:(state) =>{
      state.wardrobeModalOpen= !state.wardrobeModalOpen;
    }
  },
});

export const { userprofile ,setWardrobeModalOpen} = profileslice.actions;

export default profileslice.reducer;
