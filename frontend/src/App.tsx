import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import EventPage from "./pages/EventPage"

function App() {

  return (
    <BrowserRouter>

      <NavBar/>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/event/1" element={<EventPage/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
