import { Spinner, Alert } from 'react-bootstrap'

const LoaderComponent = ({ message = "Cargando..." }) => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Spinner animation="border" role="status" />
      <Alert variant="warning" className="text-center mt-3">
        {message}
      </Alert>
    </div>
  )
}

export const customAlert = ({ variant = "info", message = "Cargando..." }) => {
  return (
    <Alert variant={variant} className="text-center mt-3">
      {message}
    </Alert>
  )
}

export default LoaderComponent