import { NavLink } from 'react-router-dom'
import '../../App.css'

export default function CategoryNavList({ categories }) {
  return (
    <aside className="category-nav">
      <h2 className="category-title">Categorías</h2>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat.category} className="category-item">
            {cat.subCategory.length === 0 ? (
              <NavLink 
                to={cat.categoryPath} 
                className={({ isActive }) => isActive ? "category-link active-category" : "category-link"}
              >
                {cat.category}
              </NavLink>
            ) : (
              <span className="category-label">{cat.category}</span>
            )}

            {cat.subCategory.length > 0 && (
              <ul className="subcategory-list">
                {cat.subCategory.map(sub => (
                  <li key={sub.name} className="subcategory-item">
                    <NavLink 
                      to={sub.categoryPath} 
                      className={({ isActive }) => isActive ? "subcategory-link active-subcategory" : "subcategory-link"}
                    >
                      {sub.name}
                    </NavLink>
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