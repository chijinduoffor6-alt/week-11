import { useParams, useNavigate } from 'react-router'
import { courses } from '../data/courses'
import './CourseDetail.css'

function CourseDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = courses.find(c => c.slug === slug)

  if (!course) {
    return (
      <div className="page">
        <div className="course-detail">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <div className="not-found-message">
            <h1>Course not found</h1>
            <p>We couldn't find the course you're looking for. Please check the slug and try again.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="course-detail">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <div className="course-header">
          <div>
            <h1 className="course-title">{course.title}</h1>
            <div className="course-meta">
              <span className={`course-badge course-badge--${course.category.toLowerCase()}`}>
                {course.category}
              </span>
              <span className="course-duration">⏱ {course.duration}</span>
            </div>
          </div>
        </div>

        <div className="course-content">
          <p className="course-description">{course.description}</p>

          <div className="course-topics">
            <h2>Topics Covered</h2>
            <ul>
              {course.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
