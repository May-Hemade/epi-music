import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Headbar from "./components/Headbar"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:search" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
