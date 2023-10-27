import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Loginp from "./pages/Loginp";


const App = () => {
  return(
    <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Login />} path="/Login" />
    <Route element={<Loginp />} path="/Login2" />
    </Routes>
  )
}

export default App;