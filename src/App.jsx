import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Login from './Login'
// import New from "./New";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Otp from "./otp/Otp";
import Bgav from "./avatar/Bgav";
import Av3 from "./avatar/Av3";
import Avat4 from "./avatar/Avat4";
import Hear from "./hear/Hear";
import Home from "./home/Home";
import Add from "./home/cards/add/Add";

import Map from './home/map/Map'
import Level from "./level/Level";
import Math from "./math/Math";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signup/>}/> 
          {/* <Route exact path='/' element={<Login/>}/>  */} 
          <Route path="/bgav" element={<Bgav />} />
          <Route path="/hear" element={<Hear/>} />
          <Route  path='/otp' element={<Otp/>}/>
          <Route  path='/avtr' element={<Avat4/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/add' element={<Add/>}/>
          <Route  path='/map' element={<Map/>}/>
          <Route  path='/level' element={<Level/>}/>
          <Route  path='/math' element={<Math/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
