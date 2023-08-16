
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Login from './Login'
import New from './New'
import Signup from './signup/Signup'
import Login from './login/Login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  
     <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Signup/>}/> 
      {/* <Route exact path='/' element={<Login/>}/>  */}
      <Route  path='/new' element={<New/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
