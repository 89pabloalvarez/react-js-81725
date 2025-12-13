import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../../../helper/Helper'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.img}
        style={{
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
          display: 'block',
        }}
        alt={product.name}
      />
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