import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import AboutUs from './pages/AboutUs'
import HowToBuy from './pages/HowToBuy'
import ProductDetailContainer from './components/main/product/ProductDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main view={'home'}/>}/>
        <Route path='/home' element={<Main view={'home'}/>}/>
        <Route path='*' element={<Main view={'notfound'}/>}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/how-to-buy' element={<HowToBuy />}/>
        <Route path='/category/:category' element={<Main view={'home'}/>}/>
        <Route path='/product/:id' element={<ProductDetailContainer />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App