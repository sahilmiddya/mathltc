import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index.js";
// import Otp2 from "./otp/Otp2.jsx";
import Otp from "./otp/Otp.jsx";
import Av2 from "./avatar/Av2.jsx";
import Av3 from "./avatar/Av3.jsx";
import Hear from "./hear/Hear.jsx";
import Avat4 from "./avatar/Avat4.jsx";
import Bgav from "./avatar/Bgav.jsx";
// import Avat4 from "./avatar/Avat4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      {/* <Avatar/> */}
      {/* <Av3 /> */}
      {/* <Avat4/> */}
      {/* <Bgav/> */}
      {/* <Av2 /> */}
      {/* <Otp /> */}
      {/* <Hear/> */}
    </Provider>
  </React.StrictMode>
);
