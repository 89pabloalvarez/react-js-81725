import { Alert, Spinner } from 'react-bootstrap'

const LoaderComponent = ({text}) => {
  return (
    <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">{text}</span>
        </Spinner>
    </div>
  )
}

export default LoaderComponent