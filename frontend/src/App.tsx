import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import EventPage from "./pages/EventPage"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import CreateEvent from "./pages/CreateEvent"

function App() {

  return (
    <BrowserRouter>

      <NavBar/>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/event/1" element={<EventPage/>}/>
          <Route path="/create-event" element={<CreateEvent/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
