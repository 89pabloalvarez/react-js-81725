import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../App.css'

export default function CartIcon() {
  const itemCount = 3 // hardcodeado por ahora

  return (
    <div className="cart-icon-container">
      <i className="bi bi-cart3 cart-icon"></i>
      <span className="cart-badge">{itemCount}</span>
    </div>
  )
}