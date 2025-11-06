import logo from '../../assets/images/logo_sin_fondo.png'
import NavBar from '../header/navBar/NavBar'
import CartIcon from '../header/cart/CartIcon'
import Carrousel from '../header/carousel/Carrousel'
import '../../App.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-carousel">
        <Carrousel />
      </div>
      <div className="header-main d-flex justify-content-between align-items-center px-4 py-2">
        <img src={logo} alt="Logo Kiosco" className="header-logo" />
        <div className="header-nav">
          <NavBar />
        </div>
        <div className="header-cart">
          <CartIcon />
        </div>
      </div>
    </header>
  )
}
