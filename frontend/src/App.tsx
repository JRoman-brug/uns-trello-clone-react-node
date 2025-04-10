import { useState } from 'react'
import { projects } from '../dev/mockupData'
import Sidebar from './components/custom/sidebar';
import { Menu, X } from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  //TODO Initialize it as false on mobile and true on desktop
  const [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <>
      <div className="flex flex-col h-screen bg-[#E6EBE0]">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#5D576B] text-white z-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-[#4d4a5a] transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-bold">{activeProject.name}</h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            projects={projects}
            activeProject={activeProject} 
            setActiveProject={(project) => setActiveProject(project)} 
            />
        </div>
      </div>
    </>
  )
}

export default App
