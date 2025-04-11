import Board from './Board'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="h-screen flex bg-appSecondary">
      <Sidebar />
      <Board />
    </div>
  )
}

export default Layout
