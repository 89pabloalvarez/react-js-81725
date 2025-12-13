import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../../../helper/Helper'
import { useNavigate } from 'react-router-dom'
import NoStock from '../../../assets/images/sin_stock.gif'
import '../../../App.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="d-flex flex-column">
      <div className="product-image-wrapper">
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.name}
          className="product-image"
        />
        {product.stock === 0 && (
          <img src={NoStock} alt="Sin stock" className="no-stock-overlay" />
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{product.name}</Card.Title>
        <div className="mt-auto text-center fw-bold price-text text-success fs-5">
          {formatCurrency(product.price)}
        </div>
        <Button
          variant="primary"
          className="mt-2"
          disabled={product.stock === 0}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          Comprar
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
