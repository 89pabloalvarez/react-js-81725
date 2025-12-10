import { formatCurrency } from '../../../helper/Helper'
import ProductCount from './ProductCount'
import { Card } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2'

const ProductDetail = ({product}) => {
  const {addProductToCart} = useContext(CartContext)
  const onAdd=(count)=>{
    addProductToCart(product, count)
    Swal.fire({
      title: '¡Producto agregado al carrito!',
      text: `Agregaste ${count} unidades del producto: ${product.name}`,
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500
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
        <ProductCount stock={product.stock} onAdd={onAdd}/>
    </main>
  )
}
export default ProductDetail