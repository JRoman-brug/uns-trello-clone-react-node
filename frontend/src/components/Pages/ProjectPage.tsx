import Board from '../Board'
import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom'
import useProjects from '../../hooks/useProjects'
import { useMemo } from 'react'

function ProjectPage() {
  const { id } = useParams()
  const { projects } = useProjects()
  const project = useMemo(() => projects?.find(project => id && project.id === id), [projects, id])
  const gradient = project?.gradient ?? ['bg-background-black', 'bg-background-black']
  return (
    <div
      className="flex flex-col w-full justify-start items-center min-h-screen overflow-hidden relative"
      style={{
        background: `linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      <div className="bg-[#0006] px-10 py-4 w-full">
        <span className="text-2xl text-[#fff] font-semibold">{project?.name}</span>
      </div>
      <Sidebar />
      <Board />
    </div>
  )
}

export default ProjectPage
