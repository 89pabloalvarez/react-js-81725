import '../../src/App.css'
import ProductListContainer from '../components/main/product/ProductListContainer'

export default function Home() {
  return (
    <>
      <h1 className="page-title">¡¡Bienvenido a tu Kiosco Online!!</h1>
      <p className="page-paragraph">Acá vas a encontrar alfajores, caramelos, gaseosas y más.</p>
      <ProductListContainer />
    </>
  )
}