import { useEffect, useState } from 'react'
import { getProductById } from '../../../mock/Asyncmock'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const ProductDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getProductById(id)
      .then(res => setProductDetail(res))
      .catch(error => console.log(error))
  }, [id])

  return (
    <>
      {productDetail ? (
        <ProductDetail product={productDetail} />
      ) : (
        <main>
          <Alert variant="warning" className="text-center mt-3">
            Cargando producto...
          </Alert>
        </main>
      )}
    </>
  )
}

export default ProductDetailContainer