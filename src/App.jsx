import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Cars from "./pages/Cars.jsx"
import Advertisements from "./pages/Advertisements.jsx"

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-videos" element={<Cars />} />
        <Route path="/advertisement" element={<Advertisements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
