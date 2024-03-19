
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './Pages/Authentication/Login'
import SignUp from './Pages/Authentication/SignUp'
import DashBoard from './Pages/DashBoard'
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}></Route>
      <Route path="/projects" element={<DashBoard/>}></Route>
      <Route path="/tasks" element={<DashBoard/>}></Route>
      <Route path="/teams" element={<DashBoard/>}></Route>
      <Route path="/reports" element={<DashBoard/>}></Route>
      <Route path="/settings" element={<DashBoard/>}></Route>
      <Route path="/notifications" element={<DashBoard/>}></Route>
      <Route path="/calendar" element={<DashBoard/>}></Route>
      <Route path="/help" element={<DashBoard/>}></Route>
      <Route path="/profile" element={<DashBoard/>}></Route>
      <Route path="/logout" element={<Login/>}></Route>
    </Routes>
  )
}

export default App
