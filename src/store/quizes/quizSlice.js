import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTypes: null,
  quizFormat: null,
  quizQuestions: null,
  quizLevel: null,
  selectedQuizType: null,
  selectQuizLevel: null,
  count: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,

  reducers: {
    quizTypes: (state, action) => {
      state.quizTypes = action.payload;
    },
    selectQuizType: (state, action) => {
      state.selectedQuizType = action.payload;
    },
    selectQuizLevel: (state, action) => {
      state.selectQuizLevel = action.payload;
    },

    quizFormat: (state, action) => {
      state.quizFormat = action.payload;
    },
    quizLevel: (state, action) => {
      state.quizLevel = action.payload;
    },
    quizQuestions: (state, actions) => {
      if (Array.isArray(state.quizQuestions?.question_answer_list)) {
        state.quizQuestions = {
          ...state.quizQuestions,
          question_answer_list: [
            ...state.quizQuestions.question_answer_list,
            ...actions.payload.question_answer_list,
          ],
        };
      } else {
        state.quizQuestions = actions.payload;
      }
    },
    setcount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {
  quizTypes,
  quizLevel,
  quizFormat,
  selectQuizType,
  selectQuizLevel,
  quizQuestions,
  setcount,
} = quizSlice.actions;

export default quizSlice.reducer;
