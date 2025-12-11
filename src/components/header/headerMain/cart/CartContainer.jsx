import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../../../App.css'

const CartContainer = () => {
  const {cart, setCart, cartQuantity, removeProductFromCart, clear, totalWithTaxes}= useContext(CartContext)
  const navigate = useNavigate()

  const handleRemoveProduct = (id) => {
    const newCart = cart.filter(product => product.id !== id)
    setCart(newCart)

    const newQuantity = newCart.reduce((acc, prod) => acc + prod.quantity, 0)
    if (newQuantity === 0) {
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
          {cart.map((compra) => (
            <tr key={compra.id}>
              <td>
                <img src={compra.img} alt={compra.name} className="cart-img" />
              </td>
              <td>{compra.name}</td>
              <td>${compra.price},00</td>
              <td>{compra.quantity}</td>
              <td>${compra.quantity * compra.price},00</td>
              <td className="cart-remove-cell">
                <button
                  type="button"
                  className="btn btn-danger rounded-circle cart-icon-btn"
                  onClick={() => handleRemoveProduct(compra.id)}
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
        <p><strong>Precio Total:</strong> ${cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)},00</p>
        <p><strong>Precio Total con impuestos:</strong> ${totalWithTaxes()},00</p>
      </div>

      <div className="cart-actions">
        <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
        <Link className="btn btn-success" to="/checkout">Terminar Compra</Link>
      </div>
    </main>
  )
}

export default CartContainer