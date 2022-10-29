import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../Credentials/Index";
import Container from "react-bootstrap/Container";
import Login from "../Login/Login"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsTable } from "react-icons/bs";
import "./NavBarTest.css";
const auth = getAuth(firebaseApp);

function NavScrollExample() {

  //overlay
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Consulta Tablas
    </Tooltip>
  );

  const navigate = useNavigate();
  const emailUser = JSON.parse(localStorage.getItem("emailUser"));
  function closeSession() {
    signOut(auth);
    localStorage.removeItem("emailUser");
    let path = "/";
    navigate(path);
  }


  return (
    <Navbar className="navBarContainer" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} className="LogoNavBar" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
          //navbarScroll
          >
            <div className="listNavBar">
              <div className="navBarLinks">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="navBarLinks">
                <NavLink to="/nosotros">¿Quiénes Somos?</NavLink>
              </div>
              {/* <div className="navBarLinks">
                <NavLink to="/servicios">Servicios</NavLink>
              </div> */}
              <div className="navBarLinks">
                <NavLink to="/servicios">Servicios</NavLink>
              </div>
              <div className="navBarLinks">
                <NavLink to="/contacto">Contacto</NavLink>
              </div>

              {emailUser ? (
                <>

                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 150, hide: 500 }}
                    overlay={renderTooltip}
                  >
                    <div className="navBarLinks">
                      <NavLink to="/user">
                        <BsTable />
                      </NavLink>
                    </div>
                  </OverlayTrigger>

                  <div className="navBarLinks">
                    <NavLink to="/" onClick={closeSession}>Cerrar sesion</NavLink>
                  </div>


                </>
              ) : (
                <div className="navBarLinks">
                  <NavLink to="/">< Login /></NavLink>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
