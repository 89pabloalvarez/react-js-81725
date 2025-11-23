import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'

export default function Main({ view }) {
  return (
    <main>
      {view === 'home' && <Home />}
      {view === 'notfound' && <NotFound />}
    </main>
  )
}