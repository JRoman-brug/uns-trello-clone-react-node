import { FaFlipboard } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import AddProjectCard from '../dialog/AddProjectCard'
import useProjects from '@/hooks/useProjects'

function HomePage() {
  const { projects } = useProjects()
  return (
    <div className="flex py-24 min-h-[calc(100vh-80px)] justify-center">
      <div className="flex flex-col gap-[20px] items-left mt-10">
        <div className="flex gap-5 items-center">
          <FaFlipboard size={20} className="text-appPrimary size-5" />
          <span className="text-appPrimary text-4xl font-secondary">TUS PROYECTOS</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-10">

          {projects?.map(project => <ProjectCard key={project.id} project={project} />)}
          <AddProjectCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage
