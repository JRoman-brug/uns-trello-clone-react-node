import { TaskType } from '../../types/dataTypes'
import { Badge } from '../ui/badge'
import { Check, X } from 'lucide-react'

interface TaskDialog {
  task: TaskType
  open: boolean
  onClose: () => void
}
function TaskDialog({ task, open, onClose }: TaskDialog) {
  const onCancel = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('cancel')
    onClose()
  }

  return (
    // Overlay
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={onCancel}
    >
      {/* Content */}
      <div
        className={`w-xl h-fit mx-4 flex flex-col gap-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white">{task.name}</h2>
        <Badge className="bg-white text-black">{task.type}</Badge>
        <p className="text-white">{task.description}</p>
        <div className="flex gap-2 items-center text-white">
          <p>Complete:</p>
          {task.isCompleted ? <Check /> : <X />}
        </div>
        <button
          className="bg-[#2d3338] hover:bg-[#48515a] text-white transition-colors px-2 py-1 rounded-sm"
          onClick={onCancel}
        >
          exit
        </button>
      </div>
    </div>
  )
}

export default TaskDialog
