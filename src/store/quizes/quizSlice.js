import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormats: null,
  quizQuestions: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,

  reducers: {
    quizTypes: (state, action) => {
      state.quizTypes = action.payload;
    },
  },
});

export const { quizTypes } = quizSlice.actions;

export default quizSlice.reducer;
