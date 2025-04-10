import { motion, AnimatePresence } from 'motion/react'
import Navbar from './Navbar'
import { Project } from '@/types/dataTypes'

interface props {
  sidebarOpen: boolean
  setSidebarOpen: (state: boolean) => void
  projects: Project[]
  activeProject: Project
  setActiveProject: (project: Project) => void
}

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  projects,
  activeProject,
  setActiveProject,
}: props) {
  return (
    <>
      {/* Sidebar - hidden on mobile by default, shown when sidebarOpen is true */}
      <AnimatePresence>
        {sidebarOpen ? (
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } md:block absolute md:relative z-20 h-[calc(100%-4rem)] md:h-auto w-64 md:w-64`}
          >
            <Navbar
              projects={projects}
              activeProject={activeProject}
              setActiveProject={project => {
                setActiveProject(project)
                setSidebarOpen(false) // Close sidebar on mobile after selection
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Overlay to close sidebar on mobile */}
      {/* TODO Fix close on desktop mode */}
      {sidebarOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: '0%' }}
            animate={{ opacity: '50%' }}
            exit={{ opacity: '0%' }}
            className="md:hidden fixed inset-0 bg-black z-10"
            onClick={() => setSidebarOpen(false)}
          ></motion.div>
        </AnimatePresence>
      ) : null}
    </>
  )
}

export default Sidebar
