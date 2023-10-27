import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loginp from "./pages/Loginp";


const App = () => {
  return(
    <Routes>
    <Route element={<Home />} path="/Home" />
    <Route element={<Loginp />} path="/Login" />
    </Routes>
  )
}

export default App;