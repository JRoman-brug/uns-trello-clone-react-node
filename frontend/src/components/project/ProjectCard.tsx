import { useState } from 'react'
import { ProjectType } from '../../types/dataTypes'
import OptionsMenu from '../ui/OptionsMenu'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import EditProjectDialog from './EditProjectDialog'
import ConfirmDialog from '../dialog/ConfirmDialog'
import useProjects from '@/hooks/useProjects'
interface props {
  project: ProjectType
}

function ProyectCard({ project }: props) {
  const [openOptions, setOpenOptions] = useState(false)
  const [updateDialog, setUpdateDialog] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState(false)
  const navigate = useNavigate()
  const { deleteProject } = useProjects()

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className={`w-[250px] relative h-[100px] flex flex-col justify-between items-start px-5 py-2.5 cursor-pointer rounded-sm`}
      style={{
        background: `linear-gradient(to bottom right, ${project.gradient[0]}, ${project.gradient[1]})`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 block bg-[#0000] hover:bg-[#0002] transition-colors duration-200"></div>
      <div className="flex items-start justify-between w-full">
        <span className="font-bold text-white text-xl font-primary">{project.name}</span>
        <div className="z-100 p-1 relative rounded-sm hover:bg-appDarkAccent/35 transition-all duration-200">
          <BsThreeDotsVertical
            size={20}
            className="text-white"
            onClick={e => {
              e.stopPropagation()
              setOpenOptions(true)
            }}
          />
        </div>
      </div>
      <IoIosLock size={15} className="text-white" />
      {updateDialog && (
        <EditProjectDialog onClose={() => setUpdateDialog(false)} projectId={project.id} />
      )}
      {deleteDialog && (
        <ConfirmDialog
          title="Are you sure you want to delete this project?"
          open={true}
          onClose={() => setDeleteDialog(false)}
          onAction={() => deleteProject(project.id)}
        />
      )}
      {openOptions && (
        <OptionsMenu
          close={() => setOpenOptions(false)}
          openUpdateDialog={() => setUpdateDialog(true)}
          openDeleteDialog={() => setDeleteDialog(true)}
        />
      )}
    </motion.div>
  )
}

export default ProyectCard
