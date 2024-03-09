
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './Pages/Authentication/Login'
import SignUp from './Pages/Authentication/SignUp'
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
  )
}

export default App
