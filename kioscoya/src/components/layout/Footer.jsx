import logo from '../../assets/images/logo_sin_fondo.png'

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kiosco"/>
      <p>© {new Date().getFullYear()} KioscoYa. Todos los derechos reservados.</p>
    </footer>
  )
}