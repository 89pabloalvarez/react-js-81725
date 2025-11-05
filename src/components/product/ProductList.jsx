import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
    console.log('ProductList products:', products);
  return (
    <div>
        {products.map( (product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList