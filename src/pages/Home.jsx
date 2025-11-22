import '../../src/App.css'
import ProductListContainer from '../components/main/product/ProductListContainer'

export default function Home() {
  return (
    <>
      <h1 className="page-title">¡¡Bienvenido a tu Kiosco Online!!</h1>
      <p className="page-paragraph">Encuentra los productos de las mejores marcas en ésta aplicación.</p>
      <ProductListContainer />
    </>
  )
}