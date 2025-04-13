import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
