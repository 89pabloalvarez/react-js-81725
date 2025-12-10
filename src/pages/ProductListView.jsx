import { useParams } from 'react-router-dom'
import '../../src/App.css'
import ProductListContainer from '../components/main/product/ProductListContainer'
import { formatCategoryText, replaceHyphensWithSpaces } from '../helper/Helper'

export default function ProductListView({title, subtitle}) {

  const {category, searchedText} = useParams()

  // Si no viene el subtitulo es porque viene por categoría o búsqueda.
  if (!subtitle) {
    subtitle = category
      ? `${formatCategoryText(category)}`
      : (searchedText ? `"${replaceHyphensWithSpaces(searchedText)}"` : null)
  }

  return (
    <main>
      <h1 className="page-title">{title}</h1>
      <p className="page-paragraph">{subtitle}</p>
      <ProductListContainer />
    </main>
  )
}