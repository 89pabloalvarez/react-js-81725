import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../../../App.css'
import { formatCurrency } from '../../../../helper/Helper'

const CartContainer = () => {
  const {cart, setCart, clearCart, totalToPay, totalWithTaxes}= useContext(CartContext)
  const navigate = useNavigate()

  const handleRemoveProduct = (id) => { // Eliminar uno por uno.
    const newCart = cart.filter(product => product.id !== id)
    setCart(newCart)

    const newQuantity = newCart.reduce((acc, prod) => acc + prod.quantity, 0)
    if (newQuantity === 0) {
      showEmptyCartAlert()
    }
  }

  const handleRemovePoroducts = () => { // Eliminar todos.
    clearCart()
    showEmptyCartAlert()
  }

  const showEmptyCartAlert = () => { // Alerta de carrito vacío.
    Swal.fire({
      title: "¡Carrito vacío!",
      icon: "warning",
      timer: 3000,
      text: "Te redirigimos a la página principal.",
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <main className="cart-container">
      <h1 className="page-title">¡¡Bienvenido a tu carrito de compras!!</h1>
      <p className="page-paragraph">Ésta es tu lista de compras.</p>
      <p className="page-paragraph">Por favor revisá los artículos agregados y que las cantidades sean correctas.</p>
      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Precio Subtotal</th>
            <th>Eliminar Producto</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.img} alt={product.name} className="cart-img" />
              </td>
              <td><div className='fw-bold'>{product.name}</div></td>
              <td><div className='fw-bold text-success'>{formatCurrency(product.price)}</div></td>
              <td><div className='fw-bold'>{product.quantity}</div></td>
              <td><div className='fw-bold text-success'>{formatCurrency(product.quantity * product.price)}</div></td>
              <td className="cart-remove-cell">
                <button
                  type="button"
                  className="btn btn-danger rounded-circle cart-icon-btn"
                  onClick={() => handleRemoveProduct(product.id)}
                  aria-label="Eliminar producto"
                >
                  <i className="bi bi-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-totals">
        <p>
          <strong>Precio Total: </strong>
          <span className='fw-bold text-success'>{formatCurrency(totalToPay())}</span>
        </p>
        <p>
          <strong>Precio Total con impuestos: </strong>
          <span className='fw-bold text-success'>{formatCurrency(totalWithTaxes())}</span>
        </p>
      </div>
      <div className="cart-actions">
        <button className="btn btn-danger" onClick={handleRemovePoroducts}>Vaciar el carrito</button>
        <Link className="btn btn-success" to="/checkout">Continuar con la orden</Link>
      </div>
      <p className="page-paragraph"><strong>IVA 21%</strong> </p>
    </main>
  )
}

export default CartContainer