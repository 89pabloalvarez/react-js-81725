import logo from '../../../../assets/images/logo_sin_fondo.png'
import '../../../../App.css'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='Kiosco Logo' className='logo-image' />
    </div>
  )
}

export default Logo
