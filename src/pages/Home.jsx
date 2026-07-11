import { Link } from 'react-router'
import { courses } from '../data/courses'
import './Home.css'

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Master Web Development</h1>
        <p>Learn the skills to build modern, responsive web applications. Choose from Beginner to Intermediate courses.</p>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/courses/${course.slug}`} key={course.id} className="course-card">
            <div className="course-card__header">
              <h3 className="course-card__title">{course.title}</h3>
              <span className={`course-badge course-badge--${course.category.toLowerCase()}`}>
                {course.category}
              </span>
            </div>
            <p className="course-card__duration">⏱ {course.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
