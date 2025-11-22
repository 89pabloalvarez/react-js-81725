import Logo from './logo/Logo'
import NavBar from './navBar/NavBar'
import CartIcon from './cart/CartIcon'
import '../../../App.css'

const HeaderMain = () => {
    return (
        <div className="header-main">
            <Logo />
            <NavBar />
            <CartIcon />
        </div>
    )
}

export default HeaderMain