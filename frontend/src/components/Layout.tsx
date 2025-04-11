import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="h-screen flex bg-appSecondary">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
