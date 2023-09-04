import { createSlice } from "@reduxjs/toolkit"; 

const settingSlice = createSlice({
  name: "setting",
  initialState: { user: null, settingModalOpen: false },
  reducers: {
    userprofile: (state, action) => {
      state.user = action.payload;
    },
    setsettingModalOpen:(state) =>{
      state.settingModalOpen= !state.settingModalOpen;
    }
  },
});

export const { userprofile ,setsettingModalOpen} = settingSlice.actions;

export default settingSlice.reducer;
