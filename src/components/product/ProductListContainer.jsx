import { useEffect, useState } from 'react'
import { getProducts } from '../../mock/Asyncmock'
import ProductList from './ProductList'

const ProductListContainer = () => {
    const[productsData, setProductsData] = useState([])

    useEffect(()=>{
        //pedir datos
        getProducts().then((res)=> setProductsData(res)).catch((error)=> console.log(error))
        console.log('productsData', productsData)
    },[])

  return (
    <div>
        {/* {data.map((prod, index)=> <p key={index}>{prod.name}</p>)} */}
        <ProductList products={productsData}/>
    </div>
  )
}

export default ProductListContainer