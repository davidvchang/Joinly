import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import EventPage from "./pages/EventPage"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import CreateEvent from "./pages/CreateEvent"
import ForgotPassword from "./pages/ForgotPassword"

function App() {

  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <NavBar/>

      <div className="pt-16 flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/event/:id_event" element={<EventPage/>}/>
          <Route path="/create-event" element={<CreateEvent/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>

      </div>

    </div>

    </BrowserRouter>
  )
}

export default App
