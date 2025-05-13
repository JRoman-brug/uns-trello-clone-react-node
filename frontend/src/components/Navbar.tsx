import { useNavigate, useParams } from 'react-router-dom'
import useProjects from '../hooks/useProjects'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Unplug } from 'lucide-react'
import { FaHome } from 'react-icons/fa'

function Navbar() {
  const { projects, isLoading, isError } = useProjects()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (isError) {
      toast.error('Error loading projects', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    }
  }, [isError])

  return (
    <nav className="w-full h-full bg-[#2b3136] flex flex-col shadow-lg z-10 app-scrollbar">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          <div className="flex gap-2 mb-2 text-white">
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer"
              aria-label="Back to home"
            >
              <FaHome size={24} />
            </button>
            <p className="font-bold">Projects</p>
          </div>
          {isLoading ? (
            <>
              <span className="h-4 w-3/4 rounded-md bg-appLight inline-block animate-pulse"></span>
              <span className="h-4 w-3/4 rounded-md bg-appLight inline-block animate-pulse"></span>
              <span className="h-4 w-3/4 rounded-md bg-appLight inline-block animate-pulse"></span>
              <span className="h-4 w-3/4 rounded-md bg-appLight inline-block animate-pulse"></span>
            </>
          ) : isError ? (
            <>
              <div className="flex flex-col items-center justify-center text-red-600">
                <span>
                  <Unplug />
                </span>
                <p>Error loading projects</p>
              </div>
            </>
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
