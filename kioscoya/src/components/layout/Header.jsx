import logo from '../../assets/images/logo_sin_fondo.png'
import NavBar from '../navbar/NavBar'
import CartIcon from '../cart/CartIcon'
import '../../App.css'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kiosco" className="header-logo" />
      <div className="header-nav">
        <NavBar />
      </div>
      <div className="header-cart">
        <CartIcon />
      </div>
    </header>
  )
}