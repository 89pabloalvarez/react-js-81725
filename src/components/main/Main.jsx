import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'
import NotFound from '../../pages/NotFound'
import HowToBuy from '../../pages/HowToBuy'

export default function Main({ view }) {
  return (
    <main>
      {view === 'home' && <Home />}
      {view === 'notfound' && <NotFound />}
      {view === 'aboutus' && <AboutUs />}
      {view === 'howtobuy' && <HowToBuy />}
    </main>
  )
}