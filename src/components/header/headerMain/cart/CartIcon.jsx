import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../../App.css'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartIcon() {
  const {cart, totalCartQuantity} = useContext(CartContext)
  const isEmpty = !cart || cart.length === 0

  return (
    <div className="cart-icon-container">
      <Link to={isEmpty ? "/cart-empty" : "/cart"}>
        <i className="bi bi-cart3 cart-icon-header"></i>
        { cart.length > 0 && <span className="cart-badge">{totalCartQuantity()}</span>}
      </Link>
    </div>
  )
}