import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../../../helper/Helper'

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem', alignItems: 'center' }}>
      <Card.Img variant="top" src={product.img} style={{
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
          display: 'block',
          alt: product.name
        }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {formatCurrency(product.price)}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard