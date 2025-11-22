import Header from './components/header/Header'
import CategoryNavContainer from './components/categoryNav/CategoryNavContainer'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import AboutUs from './pages/AboutUs'
import HowToBuy from './pages/HowToBuy'
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
            <Route path="/" element={<Main view="home" />} />
            <Route path="/home" element={<Main view="home" />} />
            <Route path="*" element={<Main view="notfound" />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/category/:category" element={<Main view="home" />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            {/* funcion que definiré para la entrega final, que se ejecutará al usar el buscador del header. por ahora seguirá siendo not found */}
            <Route path="/searched-product/:searched-text" element={<Main view="home" />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App