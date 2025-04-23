//Types
import { TaskType } from '@/types/dataTypes'
import { Badge } from '@/components/ui/badge'
//Icons
import { Pen, Trash2 } from 'lucide-react'
//Motion
import { motion } from 'motion/react'

import ConfirmDialog from '@/components/dialog/ConfirmDialog'
import { useState } from 'react'
import EditTaskDialog from './EditTaskDialog'

interface props {
  task: TaskType
  onClick: () => void
}

function Task({ task, onClick }: props) {
  const [openModal, setOpenModel] = useState(false)
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false)
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-appLight shrink-0 h-32 rounded-lg py-2 px-3"
    >
      <Badge className="bg-appPrimary">Diseño</Badge>
      <div className="flex justify-between items-center">
        <h3>{task.name}</h3>
        <div className="flex">
          <button
            onClick={() => setOpenEditTaskDialog(true)}
            className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"
          >
            <Pen size={20} />
          </button>

          <EditTaskDialog
            task={task}
            open={openEditTaskDialog}
            onClose={() => setOpenEditTaskDialog(false)}
          />

          <button
            className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"
            onClick={() => setOpenModel(true)}
          >
            <Trash2 size={20} />
          </button>
          <ConfirmDialog
            title="Are you sure you want to delete this task?"
            open={openModal}
            onClose={() => setOpenModel(false)}
            onAction={onClick}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Task
