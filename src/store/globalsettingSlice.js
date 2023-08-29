import { createSlice } from "@reduxjs/toolkit";

const globalsettingslice = createSlice({
  name: "globalsetting",
  initialState: null,
  reducers: {
    globalsetting: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { globalsetting } = globalsettingslice.actions;

export default globalsettingslice.reducer;
