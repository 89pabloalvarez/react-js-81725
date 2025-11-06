import { useEffect, useState } from 'react'
import { getProducts } from '../../../mock/Asyncmock'
import ProductList from './ProductList'

const ProductListContainer = () => {
    const[productsData, setProductsData] = useState([])

    useEffect(()=>{
        getProducts().then((res)=> setProductsData(res)).catch((error)=> console.log(error))
    },[])

  return (
    <div>
        <ProductList products={productsData} />
    </div>
  )
}

export default ProductListContainer