import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Componets/NavBar/NavBar";
 import Contacto from "./Componets/Contact/Contacto";
 import Home from "./Componets/Home/Home";
import Users from "./Componets/Users/Users";
import Profile from "./Componets/Profile/Profile";
import AddCases from "./Componets/InputsSelects/AddCases/AddCases";
import Register from "./Componets/Login/Register";
import AddPeritos from "./Componets/InputsSelects/AddPeritos/AddPeritos";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Contacto />} />
        <Route path="/user" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacto" element={<Profile />} />
        <Route path="/addCases" element={<AddCases />} />
        <Route path="/addPerito" element={<AddPeritos />} />
        
      </Routes>
    </div>
  );
}

export default App;
