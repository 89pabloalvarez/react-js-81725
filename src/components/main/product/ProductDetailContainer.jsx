import { useEffect, useState } from 'react'
import { getProductById } from '../../../mock/Asyncmock'
import ProductDetail from './ProductDetail'

const ProductDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const { id } = useParams()
  useEffect(()=>{
    getProductById().then((res)=> setProductDetail(res)).catch((error)=> console.log(error))
  },[id])

  return (
    <div>
      <ProductDetail product={productDetail} />
    </div>
  )
}

export default ProductDetailContainer