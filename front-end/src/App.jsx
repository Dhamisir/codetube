import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import UserDetails from "./Pages/UserDetails"

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", height: "100vh" }}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user-details"} element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default App
