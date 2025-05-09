import { TaskType } from '../../types/dataTypes'
import { Badge } from '../ui/badge'
import { Pen, Trash2 } from 'lucide-react'
import { FaCheck } from 'react-icons/fa'
import { motion } from 'motion/react'
import ConfirmDialog from '../dialog/ConfirmDialog'
import { useState } from 'react'
import EditTaskDialog from './EditTaskDialog'
import TaskDialog from './TaskDialog'
import { toast } from 'react-toastify'
import useTasks from '../../hooks/useTasks'

interface props {
  task: TaskType
}

function Task({ task }: props) {
  const { updateTaskStatus, deleteTask } = useTasks(task.listId)

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false)
  const [openTaskDialog, setOpenTaskDialog] = useState(false)

  const onDeleteTask = () => {
    toast.success('Task deleted successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    deleteTask(task.id)
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={`shrink-0 rounded-lg p-2 transition-all duration-200 ease-in ${task.isCompleted ? 'bg-appDarkAccent/50' : 'bg-appDarkAccent'}`}
      onClick={() => setOpenTaskDialog(true)}
    >
      <Badge className="bg-white text-black">{task.type}</Badge>
      <div className="flex py-2 px-1 justify-start relative gap-2 items-start text-appLightDark text-md font-normal">
        <button
          className={`flex size-5 items-center justify-center rounded-full cursor-pointer transition-all box-border border-1 duration-200 ${task.isCompleted ? 'border-green-400 bg-green-400 hover:bg-green-400/75' : 'border-appLightDark bg-[#0000] hover:border-appLightDark/75'}`}
          onClick={e => {
            e.stopPropagation()

            if (task.isCompleted) {
              updateTaskStatus({
                id: task.id,
                isCompleted: false,
              })

              toast.success('Task marked as uncompleted successfully', {
                position: 'bottom-right',
                autoClose: 2000,
              })
            } else {
              updateTaskStatus({
                id: task.id,
                isCompleted: true,
              })

              toast.success('Task completed successfully', {
                position: 'bottom-right',
                autoClose: 2000,
              })
            }
          }}
        >
          <FaCheck
            className={`${
              task.isCompleted ? 'opacity-100' : 'opacity-0'
            } text-appDarkAccent transition-opacity duration-300 ease-in`}
            size={12}
          />
        </button>
        <span className={`text-sm ${task.isCompleted ? 'line-through' : ''}`}>{task.name}</span>
        <div className="flex gap-1 ml-auto">
          <button
            onClick={e => {
              e.stopPropagation()
              setOpenEditTaskDialog(true)
            }}
            className="p-1 rounded-md text-gray-500 hover:bg-appLightDark/25 hover:text-appLight transition-all duration-200 cursor-pointer"
            aria-label={`Edit task`}
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
            aria-label={`Delete task`}
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
