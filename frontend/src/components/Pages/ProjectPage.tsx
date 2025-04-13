import Board from '../components/Board'
import Sidebar from '../components/Sidebar'

function ProjectPage() {
  return (
    <div className="flex justify-center h-screen pt-[80px] overflow-hidden relative">
      <Sidebar />
      <Board />
    </div>
  )
}

export default ProjectPage
