import { Navbar, Nav } from 'react-bootstrap'
import '../../../../App.css'

export default function NavBar() {
  return (
    <Navbar expand="md" className="navbar-custom" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/about-us" className="nav-link">Acerca de Nosotros</Nav.Link>
          <Nav.Link href="/how-to-buy" className="nav-link">Cómo Comprar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}