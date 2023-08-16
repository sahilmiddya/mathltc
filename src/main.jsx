import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
// import Otp2 from "./otp/Otp2.jsx";
import Otp from "./otp/Otp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}

      {/* <Otp2/> */}
      <Otp />
    </Provider>
  </React.StrictMode>
);
