import { Carousel } from 'react-bootstrap'
import { carouselLabels } from '../../../helper/constants'
import '../../../App.css'

const Carrousel = () => {
  return (
    <Carousel interval={5000} fade controls={false} indicators={false} className="carousel-wrapper">
      {carouselLabels.map((text, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-slide">
            <p>{text}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carrousel