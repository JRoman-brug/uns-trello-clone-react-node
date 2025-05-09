import { FaFlipboard, FaPlus } from 'react-icons/fa'
import ProjectCard from '../project/ProjectCard'
import AddProjectDialog from '../project/AddProjectDialog'
import useProjects from '../../hooks/useProjects'
import { useState } from 'react'

function HomePage() {
  const { projects } = useProjects()
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="flex py-24 min-h-[calc(100vh-80px)] justify-center">
      <div className="flex flex-col gap-[20px] items-left mt-10">
        <div className="flex gap-5 items-center">
          <FaFlipboard size={20} className="text-appPrimary size-5" />
          <span className="text-appPrimary text-4xl font-secondary">TUS PROYECTOS</span>
        </div>
        <div className="w-11/12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 mt-10 mx-auto">
          {projects?.map(project => <ProjectCard key={project.id} project={project} />)}

          <div
            onClick={() => setOpenModal(true)}
            className="w-[250px] h-[100px] flex justify-center items-center cursor-pointer border-[3px] border-white border-dashed hover:scale-105 transition-all duration-200 ease-in-out"
            aria-label="Create new project"
          >
            <FaPlus size={30} className="text-white" />
          </div>
          <AddProjectDialog open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
