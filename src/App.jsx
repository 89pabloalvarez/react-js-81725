import Header from './components/header/Header'
import CategoryNavContainer from './components/categoryNav/CategoryNavContainer'
import Footer from './components/footer/Footer'
import AboutUs from './pages/AboutUs'
import HowToBuy from './pages/HowToBuy'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ProductDetailContainer from './components/main/product/ProductDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-layout">
        <CategoryNavContainer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            {/* funcion que definiré para la entrega final, que se ejecutará al usar el buscador del header. por ahora seguirá siendo not found */}
            <Route path="/searched-product/:searched-text" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App