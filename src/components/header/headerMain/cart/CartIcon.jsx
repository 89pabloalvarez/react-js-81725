import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../../App.css'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartIcon({productsInCart}) {
  const {cart} = useContext(CartContext)
  const isEmpty = !cart || cart.length === 0

  return (
    <div className="cart-icon-container">
      <Link to={isEmpty ? "/cart-empty" : "/cart"}>
        <i className="bi bi-cart3 cart-icon-header"></i>
        <span className="cart-badge">{productsInCart ? productsInCart : 0}</span>
      </Link>
    </div>
  )
}