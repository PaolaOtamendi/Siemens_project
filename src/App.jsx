import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login2 from "./pages/Loginp.jsx";


const App = () => {
  return(
    <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Home />} path="/home" />
    <Route element={<Loginp />} path="/login" />
    </Routes>
  )
}

export default App;