import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className="min-h-screen bg-background-dark flex items-center justify-center">
      <Outlet />
    </main>
  )
}

export default Layout
