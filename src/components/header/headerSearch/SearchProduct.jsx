import { Form, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../App.css'
import { replaceSpacesWithHyphens } from '../../../helper/Helper'

const SearchProduct = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim() !== '') {
      navigate(`/searched-product/${replaceSpacesWithHyphens(searchValue)}`)
    }
  }

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit" variant="outline-secondary" className="search-button">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchProduct