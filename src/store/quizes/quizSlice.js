import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormat: null,
  quizQuestions: null,
  quizLevel: null,
  selectedQuizType: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,

  reducers: {
    quizTypes: (state, action) => {
      state.quizTypes = action.payload;
    },
    selectQuizType: (state, action) => {
      console.log({ action });
      state.selectedQuizType = action.payload;
    },

    quizFormat: (state, action) => {
      state.quizFormat = action.payload;
    },
    quizLevel: (state, action) => {
      state.quizLevel = action.payload;
    },
  },
});

export const { quizTypes, quizLevel, quizFormat, selectQuizType } =
  quizSlice.actions;

export default quizSlice.reducer;
