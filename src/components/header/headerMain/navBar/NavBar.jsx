import { Navbar, Nav } from 'react-bootstrap'
import '../../../../App.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar expand="md" className="navbar-custom" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/about-us" className="nav-link">Acerca de Nosotros</NavLink>
          <NavLink to="/how-to-buy" className="nav-link">Cómo Comprar</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}