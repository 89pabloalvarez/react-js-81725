import { useEffect, useState } from 'react'
import { getProductByCategory, getProducts } from '../../../mock/Asyncmock'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap'

const ProductListContainer = () => {
  const { category } = useParams()
  const[productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const fetchData = category ? getProductByCategory(category) : getProducts() // Si no hay categoría, obtener todos los productos.
    fetchData.then((res)=> setProductsData(res))
      .catch((error)=> console.log(error))
      .finally(() => setLoading(false))
  },[category])

  if (loading) { // Le meto un spinner mientras se resuelve la promise.
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </Spinner>
      </div>
    )
  }

  if (productsData.length === 0) { // Muestro un warning cuando se ingresó una categoría en la URL y no hay productos o si no hay ningun producto.
    return (
      <Alert variant="warning" className="text-center mt-3">
        {category
          ? `No se encontraron productos para la categoría "${category}".`
          : 'No hay productos disponibles en este momento.'}
      </Alert>
    )
  }

  return (
    <div>
      <ProductList products={productsData} />
    </div>
  )
}

export default ProductListContainer