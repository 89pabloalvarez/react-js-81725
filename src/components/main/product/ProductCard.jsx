import { Card } from 'react-bootstrap'
import { formatCurrency } from '../../../helper/Helper'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
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
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-2">
          Comprar
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard