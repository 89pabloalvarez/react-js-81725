import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { replaceHyphensWithSpaces } from '../../../helper/Helper'
import { getAllProducts, getProductsByCategory, getProductsBySearch } from '../../../service/productService'
import LoaderComponent, { CustomAlert } from '../LoaderComponent'

const ProductListContainer = () => {
  const { category, searchedText } = useParams()
  const[productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let fetchData;
    if (category) {
      fetchData = getProductsByCategory(category)
    } else if (searchedText) {
      fetchData = getProductsBySearch(searchedText);
    } else {
      fetchData = getAllProducts()
    }
    fetchData
      .then(res => setProductsData(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [category, searchedText])

  if (loading) {
    return <LoaderComponent message="Cargando productos..." />
  }

  if (productsData.length === 0) {
    return CustomAlert({
      variant: "danger",
      message: category
        ? `No se encontraron productos para la categoría "${category}".`
        : searchedText
          ? `No se encontraron productos para la búsqueda "${replaceHyphensWithSpaces(searchedText)}".`
          : 'No hay productos disponibles en este momento.'
    })
  }

  return (
    <div>
      <ProductList products={productsData} />
    </div>
  )
}

export default ProductListContainer