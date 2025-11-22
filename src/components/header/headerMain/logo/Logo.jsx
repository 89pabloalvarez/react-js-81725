import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/logo_sin_fondo.png'
import '../../../../App.css'

const Logo = () => {
  return (
    <div className='logo-container'>
      <Link to="/">
        <img src={logo} alt="Kiosco Logo" className="logo-image" />
      </Link>
    </div>
  )
}

export default Logo