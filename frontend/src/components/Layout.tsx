import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Layout() {
  return (
    <main className="min-h-screen bg-background-dark flex items-center justify-center">
      <Outlet />
      <ToastContainer />
    </main>
  )
}

export default Layout
