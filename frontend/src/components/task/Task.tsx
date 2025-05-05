import { TaskType } from '@/types/dataTypes'
import { Badge } from '@/components/ui/badge'
import { Pen, Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
import ConfirmDialog from '@/components/dialog/ConfirmDialog'
import { useState } from 'react'
import EditTaskDialog from './EditTaskDialog'
import TaskDialog from './TaskDialog'
import { toast } from 'react-toastify'

interface props {
  task: TaskType
  onClick: () => void
}

function Task({ task, onClick }: props) {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false)
  const [openTaskDialog, setOpenTaskDialog] = useState(false)

  const onDeleteTask = () => {
    toast.success('Task deleted successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    onClick()
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-appDarkAccent shrink-0 rounded-lg p-2"
      onClick={() => setOpenTaskDialog(true)}
    >
      <Badge className="bg-appPrimary">Diseño</Badge>
      <div className="flex justify-between gap-2 items-center text-appLightDark text-md font-normal">
        <h3>{task.name}</h3>
        <div className="flex gap-1">
          <button
            onClick={e => {
              e.stopPropagation()
              setOpenEditTaskDialog(true)
            }}
            className="p-1 rounded-md text-gray-500 hover:bg-appLightDark/25 hover:text-appLight transition-all duration-200 cursor-pointer"
          >
            <Pen size={18} />
          </button>

          <EditTaskDialog
            task={task}
            open={openEditTaskDialog}
            onClose={() => setOpenEditTaskDialog(false)}
          />

          <button
            className="p-1 rounded-md text-gray-500 hover:bg-appLightDark/25 hover:text-appSecondary transition-all duration-200 cursor-pointer"
            onClick={e => {
              e.stopPropagation()
              setOpenConfirmDialog(true)
            }}
          >
            <Trash2 size={18} />
          </button>
          <ConfirmDialog
            title="Are you sure you want to delete this task?"
            open={openConfirmDialog}
            onClose={() => setOpenConfirmDialog(false)}
            onAction={onDeleteTask}
          />
        </div>
      </div>
      <TaskDialog task={task} open={openTaskDialog} onClose={() => setOpenTaskDialog(false)} />
    </motion.div>
  )
}

export default Task
