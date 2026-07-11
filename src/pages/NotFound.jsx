import { Link } from 'react-router'
import './NotFound.css'

function NotFound() {
  return (
    <div className="page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist. It might have been moved or deleted.</p>
          <Link to="/" className="not-found-link">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
