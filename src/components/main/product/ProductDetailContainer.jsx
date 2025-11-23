import { useEffect, useState } from 'react'
import { getProductById } from '../../../mock/Asyncmock'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const ProductDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    // Limpio los estados antes de hacer la nueva petición por si quedo 
    setError(null)
    setProductDetail(null)
    getProductById(id)
      .then(res => setProductDetail(res))
      .catch(err => setError(err)) // Si hay un error en la promise, lo guardo en el estado de error.
  }, [id])

  return (
    <>
      {error ? (
        <main>
          <Alert variant="danger" className="text-center mt-3">
            {error}
          </Alert>
        </main>
      ) : productDetail ? (
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