import { ProjectType } from '../types/dataTypes'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

interface props {
  project: ProjectType
}

function ProyectCard({ project }: props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className={`w-[250px] relative h-[100px] flex flex-col justify-between items-start px-5 py-2.5 cursor-pointer bg-gradient-to-br from-[${project.gradient[0]}] to-[${project.gradient[1]}]`}
    >
      <div className="absolute top-0 left-0 w-[250px] h-[100px] opacity-0 bg-[#000] hover:opacity-25 transition-all duration-200"></div>
      <div className="flex items-center justify-between w-full">
        <span className="font-bold text-white text-xl font-primary">{project.name}</span>
        <BsThreeDotsVertical
          size={20}
          className="text-white hover:scale-120 transition-all duration-200"
        />
      </div>
      <IoIosLock size={15} className="text-white" />
    </div>
  )
}

export default ProyectCard
