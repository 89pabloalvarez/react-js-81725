import React from 'react'
import { Link } from 'react-router-dom'
import emptyCartImg from '../assets/animatedImages/pasto-desierto.gif'
import '../App.css'

const CartEmpty = () => {
  return (
    <main>
        <h1 className="page-title">Tu carrito está vacío!!!</h1>
        <p className="page-paragraph"> No hay productos en tu carrito de compras. </p>
        <p className="page-paragraph"> Puedes explorar la página principal o navegar por las categorías a la izquierda para encontrar lo que quieras. </p>
        <img className="emptycart-image" src={emptyCartImg} alt="Carrito vacío" />
        <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-primary mt-3">
                Volver al Inicio
            </Link>
        </div>
    </main>
  )
}

export default CartEmpty
