import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// import loginslice from "./loginslice";
import authReducer from "./authSlice";
import otpReducer from "./otpSlice";
import avatarReducer from "./avatarSlice"; // Create this file next
import quizReducer from "./quizes/quizSlice"; 
import userAnswerslice from "./userAnswerslice";

const reducers = combineReducers({
  // form:loginslice.reducer,
  auth: authReducer,
  otp: otpReducer,
  avatar: avatarReducer,
  quiz: quizReducer,
  userans: userAnswerslice,

});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
