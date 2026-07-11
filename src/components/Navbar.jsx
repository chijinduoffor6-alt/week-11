import { NavLink } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        Course<span>Catalog</span>
      </NavLink>
      <div className="navbar__links">
        <NavLink 
          to="/category/Beginner" 
          className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
        >
          Beginner
        </NavLink>
        <NavLink 
          to="/category/Intermediate" 
          className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
        >
          Intermediate
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
