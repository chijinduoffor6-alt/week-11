import { useParams } from 'react-router'
import { Link } from 'react-router'
import { courses } from '../data/courses'
import './Category.css'

function Category() {
  const { category } = useParams()
  const filteredCourses = courses.filter(c => c.category === category)

  const categoryTitle = category ? `${category} Courses` : 'Courses'

  return (
    <div className="page">
      <div className="hero">
        <h1>{categoryTitle}</h1>
        <p>
          {filteredCourses.length > 0
            ? `Explore our collection of ${filteredCourses.length} ${category} course${filteredCourses.length !== 1 ? 's' : ''}`
            : 'No courses found for this category'}
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map(course => (
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
      ) : (
        <div className="no-courses">
          <p>No courses available in this category at the moment.</p>
          <Link to="/" className="back-link">Back to all courses</Link>
        </div>
      )}
    </div>
  )
}

export default Category
