import { Button, Card } from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard