import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
// import Login from './Login'
// import New from "./New";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Otp from "./otp/Otp";
import Bgav from "./avatar/Bgav";
// import Av3 from "./avatar/Av3";
import Avat4 from "./avatar/Avat4";
import Hear from "./hear/Hear";
import Home from "./home/Home";
import Add from "./home/cards/add/Add";

import Map from "./home/map/Map";
import Level from "./level/Level";
import Math from "./math/Math";
import Result from "./result/Result";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute component={<Signup />} redirectUrl="/home" />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={<Login />} redirectUrl="/home" />}
          />
          <Route
            path="/bgav"
            element={<PublicRoute component={<Bgav />} redirectUrl="/home" />}
          />
          <Route
            path="/hear"
            element={<PublicRoute component={<Hear />} redirectUrl="/home" />}
          />
          <Route
            path="/otp"
            element={<PublicRoute component={<Otp />} redirectUrl="/home" />}
          />
          <Route
            path="/avtr"
            element={<PublicRoute component={<Avat4 />} redirectUrl="/home" />}
          />

          {/* private routes */}
          <Route
            path="/home"
            element={<PrivateRoute component={<Home />} redirectUrl="/login" />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={<Add />} redirectUrl="/login" />}
          />
          <Route
            path="/map"
            element={<PrivateRoute component={<Map />} redirectUrl="/login" />}
          />
          <Route
            path="/level"
            element={<PrivateRoute component={<Level />} redirectUrl="/login" />}
          />
          <Route
            path="/math"
            element={<PrivateRoute component={<Math />} redirectUrl="/login" />}
          />
           <Route
            path="/result"
            element={<PrivateRoute component={<Result />} redirectUrl="/result" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
