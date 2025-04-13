import { Routes, Route } from 'react-router-dom'
import Layout from './components/components/Layout'
import HomePage from './components/Pages/HomePage'
import ProjectPage from './components/Pages/ProjectPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}

export default App
