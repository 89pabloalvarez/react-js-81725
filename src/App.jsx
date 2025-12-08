import Header from './components/header/Header'
import CategoryNavContainer from './components/categoryNav/CategoryNavContainer'
import Footer from './components/footer/Footer'
import AboutUs from './pages/AboutUs'
import HowToBuy from './pages/HowToBuy'
import NotFound from './pages/NotFound'
import ProductListView from './pages/ProductListView'
import ProductDetailContainer from './components/main/product/ProductDetailContainer'
import CardContainer from './components/header/headerMain/cart/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <div className="content-layout">
          <CategoryNavContainer />
          <main>
            <Routes>
              <Route path="/" element={<ProductListView title={'¡¡Bienvenido a tu Kiosco Online!!'} subtitle={'Encuentra los productos de las mejores marcas en ésta aplicación.'} />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/category/:category" element={<ProductListView title={'Usted se encuentra en la categoría:'} />} />
              <Route path="/product/:id" element={<ProductDetailContainer />} />
              <Route path="/searched-product/:searchedText" element={<ProductListView title={'Resultados de su búsqueda con el texto:'} />} />
              <Route path="/cart" element={<CardContainer />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App