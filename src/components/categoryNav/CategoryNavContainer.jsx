import { categories } from '../../helper/constants'
import CategoryNavList from './CategoryNavList'

export default function CategoryNavContainer() {
  return <CategoryNavList categories={categories} />
}