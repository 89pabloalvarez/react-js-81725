import { Navbar, Nav } from 'react-bootstrap'
import '../../../../App.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar expand="md" className="navbar-custom" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} // Si esta activo le asigno un color
          >
            Home
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            Acerca de Nosotros
          </NavLink>
          <NavLink 
            to="/how-to-buy" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            Cómo Comprar
          </NavLink>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}