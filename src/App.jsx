// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Login from './Login'
import New from './New'
import Signup from './Signup'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>login</h1> */}
     {/* <div className="form">
     <Login/></div> */}
     <BrowserRouter>
     <Routes>
      {/* <Route exact path='/' element={<Login/>}/>  */}
      <Route exact path='/' element={<Signup/>}/> 
      <Route  path='/new' element={<New/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
