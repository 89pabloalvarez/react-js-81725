import { formatCurrency } from '../../../helper/Helper'
import ProductCount from './ProductCount'
import { Card } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const ProductDetail = ({product}) => {
  const {addProductToCart} = useContext(CartContext)
  const [showProductCount, setShowProductCount] = useState(true)
  const navigate = useNavigate()
  const onAdd=(count)=>{
    setShowProductCount(false)
    Swal.fire({
        icon:'question',
        title:'¿Agregado al carrito?',
        text: `Deseas agregar ${count === 1 ? count + ' unidad': count + ' unidades'} del producto: ${product.name}`,
        showDenyButton:true,
        denyButtonText:'No, volver.',
        confirmButtonText:'Si, ir al carrito.'
    }).then((result)=>{
      if(result.isConfirmed){
        addProductToCart(product, count)
        navigate('/cart')
      } else {
        setShowProductCount(true)
      }
    })
  }

  return (
    <main>
        <h2 className="mt-auto text-center fw-bold">{product.name}</h2>
        <Card.Img
          variant="top"
          src={product.img}
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block',
          }}
          alt={product.name}
        />
        <div className="mt-auto text-center fw-bold price-text text-success fs-1">
          {formatCurrency(product.price)}
        </div>
        <p className="mt-auto text-center fw-bold fst-italic">{product.description}</p>
        <span className="mt-auto text-end d-block fs-5">Stock disponible: {product.stock} unidades</span>
        {showProductCount && (
        <ProductCount stock={product.stock} onAdd={onAdd} />
      )}
    </main>
  )
}
export default ProductDetail