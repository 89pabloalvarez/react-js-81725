import { useEffect, useState } from 'react'
import { getCategories } from '../../mock/Asyncmock'
import { categorias } from '../../helper/constants'
import CategoryNavList from './CategoryNavList'

export default function CategoryNavContainer() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categorias)
    //getCategories().then(data => setCategories(data))
  }, [])

  return <CategoryNavList categories={categories} />
}