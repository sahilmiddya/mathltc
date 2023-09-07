import { createSlice } from "@reduxjs/toolkit";

const leaderSlice = createSlice({
  name: "leaderboard",
  initialState: {  leaderboard_data:null,},
  reducers: {
    set_leaderboard_data: (state, action) => {
      state.leaderboard_data = action.payload;
    },
    
  },
});

export const { set_leaderboard_data, } = leaderSlice.actions;

export default leaderSlice.reducer;
