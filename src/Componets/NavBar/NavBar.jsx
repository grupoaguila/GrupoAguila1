import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";


function NavBar() {
  

  return (

    <div className="header-nav"> 
 <div className="contuner">
    <div className="logo-box">
      <a href="#">
      <img src={logo} width="130px" />
         </a>
    </div>
    <nav>
    <ul> 
      <li><NavLink className="a" to="/" exact>home</NavLink></li>
      <li><NavLink className="a" to="/nosotros" exact>¿Quiénes Somos?</NavLink></li>
      <li><NavLink className="a" to="/servicios" exact>Servicios</NavLink></li>
      <li><NavLink className="a" to="/user" exact>Usuarios</NavLink></li>
      <li><NavLink className="a" to="/contacto" exact>contacto</NavLink></li>  
      {/* tabletest provisorio */}
   </ul>
  </nav>
  </div>

    </div>
    
  );
}

export default NavBar;
{/* // <nav classNameName="navbar navbar-expand-lg navbar-mainbg">
    //   <NavLink classNameName="navbar-brand navbar-logo" to="/" exact>
    //     <img src={logo} width="100px" />
    //   </NavLink>

    //   <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul classNameName="navbar-nav ml-auto">
    //       <div classNameName="hori-selector">
    //         <div classNameName="left"></div>
    //         <div classNameName="right"></div>
    //       </div>

    //       <li classNameName="nav-item active">
    //         <NavLink classNameName="nav-link" to="/" exact>
    //           <i classNameName="fas fa-tachometer-alt"></i>Home
    //         </NavLink>
    //       </li>

    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-link" to="/about" exact>
    //           <i classNameName="far fa-address-book"></i>¿Quienes Somos?
    //         </NavLink>
    //       </li>

    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-link" to="/servicios" exact>
    //           <i classNameName="far fa-clone"></i>Servicios
    //         </NavLink>
    //       </li>
    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-link" to="/user" exact>
    //           <i classNameName="far fa-chart-bar"></i>Usuarios
    //         </NavLink>
    //       </li>
    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-link" to="/contacto" exact>
    //           <i classNameName="far fa-copy"></i>Contacto
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav> */}