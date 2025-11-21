import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../../../helper/Helper'
import { use } from 'react'

const ProductDetail = ({product}) => {
    const [data, setData] = useState([])
    const { category } = useParams()

    useEffect(()=>{
        getProductByCategory(category).then((res)=> setData(res)).catch((error)=> console.log(error))
    },[category])

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
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductDetail