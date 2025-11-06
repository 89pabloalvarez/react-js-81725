import { Carousel } from 'react-bootstrap'

const Carrousel = () => {
  return (
    <Carousel interval={5000} fade controls={false} indicators={false} className="w-100">
      <Carousel.Item>
        <div className="p-5 text-center" style={{ minHeight: '100px' }}>
          <p>Sean bienvenidos a la tienda en línea N°1 del país!!</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="p-5 text-center" style={{ minHeight: '100px' }}>
          <p>Descubrí productos únicos pensados para vos.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="p-5 text-center" style={{ minHeight: '100px' }}>
          <p>Rápido, seguro y con seguimiento en tiempo real</p>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrousel