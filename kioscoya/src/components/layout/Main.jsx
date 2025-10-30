import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'

export default function Main({ view }) {
  return (
    <main>
      {view === 'home' && <Home />}
      {view === 'about' && <AboutUs />}
    </main>
  )
}