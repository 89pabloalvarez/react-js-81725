import Carousel from './carousel/Carrousel'
import HeaderMain from './headerMain/HeaderMain'
import HeaderSearch from './headerSearch/HeaderSearch'

// Componente Header que incluye el carrusel, el encabezado principal y la barra de búsqueda.
const Header = () => {
  return (
    <header className="header-container">
      <Carousel />
      <HeaderMain />
      <HeaderSearch />
    </header>
  )
}

export default Header