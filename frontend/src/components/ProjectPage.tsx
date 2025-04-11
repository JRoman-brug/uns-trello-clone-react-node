import Board from './Board'
import Sidebar from './Sidebar'

function ProjectPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] py-[80px]">
      <Sidebar />
      <Board />
    </div>
  )
}

export default ProjectPage
