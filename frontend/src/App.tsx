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
import ProtectedRoute from "./components/ProtectedRoute"

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
          <Route path="/settings" element={<ProtectedRoute> <Settings/> </ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
          <Route path="/event/:id_event" element={<EventPage/>}/>
          <Route path="/create-event" element={<ProtectedRoute> <CreateEvent/> </ProtectedRoute>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>

      </div>

    </div>

    </BrowserRouter>
  )
}

export default App
