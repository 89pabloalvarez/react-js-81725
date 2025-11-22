import { Form, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import '../../../App.css'

const SearchProduct = () => {
  return (
    <Form className="search-form">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          className="search-input"
        />
        <Button variant="outline-secondary" className="search-button">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchProduct