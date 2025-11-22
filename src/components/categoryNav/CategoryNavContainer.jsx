import { useEffect, useState } from 'react'
import { getCategories } from '../../mock/Asyncmock'
import CategoryNavList from './CategoryNavList'

export default function CategoryNavContainer() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])

  return <CategoryNavList categories={categories} />
}