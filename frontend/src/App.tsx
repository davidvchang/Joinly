import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <BrowserRouter>

      <NavBar/>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
