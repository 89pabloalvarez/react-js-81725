import { Link } from 'react-router-dom'
import '../../App.css'

export default function CategoryNavList({ categories }) {
  return (
    <aside className="category-nav">
      <h2 className="category-title">Categorías</h2>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat.category} className="category-item">
            {cat.subCategory.length === 0 ? (
              <Link to={cat.categoryPath} className="category-link">
                {cat.category}
              </Link>
            ) : (
              <span className="category-label">{cat.category}</span>
            )}

            {cat.subCategory.length > 0 && (
              <ul className="subcategory-list">
                {cat.subCategory.map(sub => (
                  <li key={sub.name} className="subcategory-item">
                    <Link to={sub.categoryPath} className="subcategory-link">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}
