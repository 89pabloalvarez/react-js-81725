import logo from '../../assets/images/logo_dev_sin_fondo.png'
import '../../App.css'
import { myLinkedIn } from '../../helper/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo Kiosco" className="footer-logo" />
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} KioscoYa. Todos los derechos reservados.
      </div>
      <div className="footer-spacer">
        <a 
          href={myLinkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
        >
          WebApp Dev LinkedIn
        </a>
      </div>
    </footer>
  )
}