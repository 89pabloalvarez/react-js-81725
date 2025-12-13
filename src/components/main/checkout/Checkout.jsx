import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { updateStockForOrder, validateStockForOrder, createOrder } from '../../../services/services'
import { Link } from 'react-router-dom'
import CartEmpty from '../../../pages/CartEmpty'
import CheckoutForm from './CheckoutForm'
import '../../../App.css'
import { formatCurrency, filterCartItems } from '../../../helper/Helper'

const Checkout = () => {
  const [orderId, setOrderId] = useState(null)
  const [process, setProcess] = useState(false)
  const { cart, clearCart, totalWithTaxes } = useContext(CartContext)

  const finalizarOrden = async (data) => {
    setProcess(true)
    const orden = {
      buyer: {
        name: data.name,
        lastName: data.lastName,
        email: data.email
      },
      cart: filterCartItems(cart),
      totalAmountWithTaxes: formatCurrency(totalWithTaxes())
    }
    try {
      const validation = await validateStockForOrder(cart)
      if (!validation.stockAvailable) {
        alert(
          `No se puede procesar la orden. Los siguientes productos no tienen stock suficiente:\n` +
          validation.productsWithoutStock.map(p => `- ${p.name} (${p.reason})`).join('\n')
        )
        return
      }
      const res = await createOrder(orden)
      setOrderId(res.id)
      await updateStockForOrder(cart)
      clearCart()
    } catch (error) {
      console.error("Error al procesar la orden:", error)
      alert("Ocurrió un error al procesar la orden. Intente nuevamente.")
    } finally {
      setProcess(false)
    }
  }

  if (!cart.length && !orderId) {
    return <CartEmpty />
  }

  return (
    <main>
      {orderId ? (
        <div>
          <h1 className="page-title">Muchas gracias por su compra</h1>
          <p className="page-paragraph">
            Su número de orden es: <strong>{orderId}</strong>
          </p>
          <Link className="btn btn-dark" to="/">Volver a Home</Link>
        </div>
      ) : (
        <div>
          <h1 className="page-title">Complete sus datos para enviar la órden de compra.</h1>
          <CheckoutForm onSubmit={finalizarOrden} process={process} />
          <p className="page-paragraph">
            Una vez enviada la orden, recibirá un correo con el detalle de su compra.
          </p>
        </div>
      )}
    </main>
  )
}

export default Checkout