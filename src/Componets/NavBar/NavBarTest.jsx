
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
import './NavBarTest.css'




function NavScrollExample() {
    return (
        <Navbar className='navBarContainer' expand="lg">
            <Container fluid>
                <Navbar.Brand><img src={logo} className="LogoNavBar" /></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse  id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="listNavBar">
                            <div className='navBarLinks'>
                                <NavLink to="/">Home</NavLink>
                            </div>
                            <div className='navBarLinks'>
                                <NavLink to="/nosotros">¿Quiénes Somos?</NavLink>
                            </div >
                            <div className='navBarLinks'>
                                <NavLink to="/servicios">Servicios</NavLink>
                            </div>
                            <div className='navBarLinks'>

                                <NavLink to="/user">Usuarios</NavLink>
                            </div>
                            <div className='navBarLinks'>
                                <NavLink to="/contacto">Contacto</NavLink>
                            </div>
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;