import { useEffect, useState } from 'react'
import { getProductById } from '../../../services/services'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent, { CustomAlert } from '../LoaderComponent'

const ProductDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setError(null)
    setProductDetail(null)
    setLoading(true)
    getProductById(id)
      .then(res => setProductDetail(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <main>
        <LoaderComponent message="Cargando producto..." />
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <CustomAlert variant="danger" message={error} />
      </main>
    )
  }

  return (
    <main>
      {productDetail && <ProductDetail product={productDetail} />}
    </main>
  )

}

export default ProductDetailContainer