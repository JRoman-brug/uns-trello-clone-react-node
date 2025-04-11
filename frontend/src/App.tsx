import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Board from './components/Board'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:id" element={<Board />} />
      </Route>
      {/* <div className="flex flex-col h-screen bg-appSecondary">
        <div className="md:hidden flex items-center justify-between p-4 bg-[#5D576B] text-white z-20">
        <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-[#4d4a5a] transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-bold">{activeProject.name}</h1>
          <div className="w-8"></div>
          </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            projects={projects}
            activeProject={activeProject}
            setActiveProject={project => setActiveProject(project)}
            />
            
            <main className="flex w-fit gap-5 p-4 overflow-x-auto">
            {lists.map(list => (
              <ListTask list={list}></ListTask>
              ))}
              </main>
              </div>
              </div> */}
    </Routes>
  )
}

export default App
