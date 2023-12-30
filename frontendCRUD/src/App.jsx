import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AddEmployee from "./components/AddEmployee"
import Edit from "./components/Edit"
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addEmp" element={<AddEmployee/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
