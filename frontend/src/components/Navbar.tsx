import { useNavigate, useParams } from 'react-router-dom'
import useProjects from '../hooks/useProjects'

function Navbar() {
  const { projects, isLoading, isError } = useProjects()
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <nav className="w-full h-full bg-[#2b3136] flex flex-col shadow-lg z-10">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {isLoading ? (
            <p>Loading projects...</p>
          ) : isError ? (
            <p className="text-red-600">Error loading projects</p>
          ) : (
            projects?.map((project, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm cursor-pointer transition-colors ${
                  id === project.id.toString()
                    ? 'bg-[#ED6A5A] text-white font-medium'
                    : 'text-[#E6EBE0] hover:bg-[#4d4a5a]'
                }`}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {project.name}
              </div>
            ))
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
