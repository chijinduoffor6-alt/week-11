import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

