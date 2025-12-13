import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { updateStockForOrder, validateStockForOrder, createOrder } from '../../../services/services'
import { Link, useNavigate } from 'react-router-dom'
import CartEmpty from '../../../pages/CartEmpty'
import CheckoutForm from './CheckoutForm'
import '../../../App.css'
import { formatCurrency, filterCartItems } from '../../../helper/Helper'
import LoaderComponent, { CustomAlert } from '../../main/LoaderComponent'
import Swal from 'sweetalert2'


const Checkout = () => {
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { cart, clearCart, totalWithTaxes } = useContext(CartContext)
  const navigate = useNavigate()

  const finalizarOrden = async (data) => {
    setLoading(true)
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
      Swal.fire({
        icon: 'success',
        title: '¡Orden procesada exitosamente!',
        text: `Tu número de orden es: ${res.id}`,
        confirmButtonText: 'Volver a Home'
      }).then(() => {
        navigate('/')
      })
    } catch (error) {
      setError("Ocurrió un error al procesar la orden. Intente nuevamente.")
      console.error("Error al procesar la orden:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!cart.length && !orderId) {
    return <CartEmpty />
  }

  if (loading) {
    return (
      <main>
        <LoaderComponent message="Procesando orden..." />
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <CustomAlert variant="danger" message={error} />
      </main>
    )
  }

  return (
    <main>
      {orderId ? (
          <CustomAlert message="Orden procesada satisfactoriamente..." />
        ) : (
        <div>
          <h1 className="page-title">Complete sus datos para enviar la órden de compra.</h1>
          <CheckoutForm onSubmit={finalizarOrden} process={loading} />
          <p className="page-paragraph">
            Una vez enviada la orden, recibirá un correo con el detalle de su compra.
          </p>
        </div>
      )}
    </main>
  )
}

export default Checkout