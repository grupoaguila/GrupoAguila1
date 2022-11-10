import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Componets/NavBar/NavBar";
import NavBarTest from "./Componets/NavBar/NavBarTest";
import Contacto from "./Componets/Contact/Contacto";
import Home from "./Componets/Home/Home";
import Users from "./Componets/Users/Users";
import Profile from "./Componets/Profile/Profile";
import AddCases from "./Componets/InputsSelects/AddCases/AddCases";
import Register from "./Componets/Login/Register";
import AddPeritos from "./Componets/InputsSelects/AddPeritos/AddPeritos";
import Quienesomos from "./Componets/QuienesSomos/Quienesomos";
import TableTest from "./Componets/tableTest/TableTest";
import { PrivateRoute } from "./PrivateRutes";
import Login from "./Componets/Login/Login";
import FooterV3 from "./Componets/Footer/FooterV3";
import Services from "./Componets/Services/Services";


function App() {
  return (
    <div className="App">
      <NavBarTest />
      <div className="mainRoutesContainer">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path="/servicios" element={<Services />} />
        <Route path = "/nosotros" element={<Quienesomos/>}/>
          
        
        <Route
          path="/addPerito"
          element={
            <PrivateRoute >
              <AddPeritos />
            </PrivateRoute>
          }
        />
        <Route
          path="/addCases"
          element={
            <PrivateRoute >
              <AddCases />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/contacto" element={<Contacto />} />


        {/* <Route path="/tabletest" element={<TableTest />} /> */}
      </Routes>
      </div>
      
      <FooterV3/>
    </div>
  );
}

export default App;
