import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AddEmployee from "./components/AddEmployee"
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addEmp" element={<AddEmployee/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
