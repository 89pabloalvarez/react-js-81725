import { useState } from 'react'
import { sumar, restar } from '../../../helper/Helper'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../App.css'

const ProductCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const handleSumar = () => setCount(sumar(count, stock))
  const handleRestar = () => setCount(restar(count))

  return (
    <div className="d-flex align-items-center gap-3">
      <button
        type="button"
        className="btn btn-danger rounded-circle"
        onClick={handleRestar}
        disabled={count === 0}
        aria-label="Restar unidad"
      >
        <i className="bi bi-dash-lg" aria-hidden="true"></i>
      </button>
      <span className="product-count-value">{count}</span>
      <button
        type="button"
        className="btn btn-success rounded-circle"
        onClick={handleSumar}
        disabled={count === stock}
        aria-label="Sumar unidad"
      >
        <i className="bi bi-plus-lg" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onAdd(count)}
        disabled={stock === 0 || count === 0}
      >
        Comprar
      </button>
    </div>
  )
}

export default ProductCount