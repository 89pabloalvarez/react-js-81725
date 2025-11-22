import notFoundImg from '../../src/assets/animatedImages/you-didnt-say-the-magic-word-ah-ah.gif'
import '../../src/App.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <h1 className="page-title">¿Te perdiste?</h1>
        <p className="page-paragraph">La página que intentas acceder no existe...</p>
        <img className="notfound-image" src={notFoundImg} alt="Página no encontrada" />
        <p className="page-paragraph">...revisa la URL y vuelva a ingresar o vuelve al inicio.</p>
        <div className="d-flex justify-content-center">
            <Link to="/home" className="btn btn-primary mt-3">
                Volver al Inicio
            </Link>
        </div>

    </>
  )
}