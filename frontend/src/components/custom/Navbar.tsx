import { Project } from "types/dataTypes"

interface props {
    projects: Project[]
    activeProject: Project
    setActiveProject: (project: Project) => void
}

function Navbar({ projects, activeProject, setActiveProject }: props) {

    return (
        <nav className="w-full h-full bg-[#5D576B] flex flex-col shadow-lg z-10">
            <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-md text-sm cursor-pointer transition-colors ${activeProject === project ? "bg-[#ED6A5A] text-white font-medium" : "text-[#E6EBE0] hover:bg-[#4d4a5a]"
                                }`}
                            onClick={() => setActiveProject(project)}
                        >
                            {project.name}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar