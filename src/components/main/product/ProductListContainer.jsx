import { useEffect, useState } from 'react'
import { getProducts, getProductByCategory, getProductBySearch } from '../../../mock/Asyncmock'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap'
import { replaceHyphensWithSpaces } from '../../../helper/Helper'

const ProductListContainer = () => {
  const { category, searchedText } = useParams()
  const[productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let fetchData

    if (category) {
      fetchData = getProductByCategory(category)
    } else if (searchedText) {
      fetchData = getProductBySearch(searchedText)
    } else {
      fetchData = getProducts()
    }

    fetchData
      .then((res) => setProductsData(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [category, searchedText])

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </Spinner>
      </div>
    )
  }

  if (productsData.length === 0) {
    return (
      <Alert variant="warning" className="text-center mt-3">
        {category
          ? `No se encontraron productos para la categoría "${category}".`
          : searchedText
            ? `No se encontraron productos para la búsqueda "${replaceHyphensWithSpaces(searchedText)}".`
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