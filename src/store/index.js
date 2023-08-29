import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// import loginslice from "./loginslice";
import authReducer from "./authSlice";
import otpReducer from "./otpSlice";
import avatarReducer from "./avatarSlice"; // Create this file next
import quizReducer from "./quizes/quizSlice";
import userAnswerslice from "./userAnswerslice";
import regnSlice from "./regFlowslice";
import  profiledetailsasync  from "./ProfileSlice";
import globalsettingSlice from "./globalsettingSlice";

const reducers = combineReducers({
  // form:loginslice.reducer,
  auth: authReducer,
  otp: otpReducer,
  avatar: avatarReducer,
  quiz: quizReducer,
  userans: userAnswerslice,
  regnflow: regnSlice,
  userdetails: profiledetailsasync,
  globalsettings: globalsettingSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["otp"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
