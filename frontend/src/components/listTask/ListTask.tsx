import { ListType } from '@/types/dataTypes'
import Task from '@/components/task/Task'
import AddTaskDialog from '@/components/task/AddTaskDialog'
import useTasks from '@/hooks/useTasks'
import useLists from '@/hooks/useLists'
import { useParams } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { LuPlus } from 'react-icons/lu'
import { BsThreeDots } from 'react-icons/bs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import SkeletonTask from '../task/SkeletonTask'
import { useEffect, useState } from 'react'
import ConfirmDialog from '@/components/dialog/ConfirmDialog'
import OptionsMenu from '@/components/ui/OptionsMenu'
import { toast } from 'react-toastify'
import { Unplug } from 'lucide-react'
import EditListTaskDialog from './EditListTaskDialog'

interface props {
  list: ListType
}

function ListTask({ list }: props) {
  const { id } = useParams()
  const { deleteList } = useLists(id)
  const { tasks, isLoading, isError } = useTasks(list.id)

  useEffect(() => {
    if (isError) {
      toast.error('Error loading task', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    }
  }, [isError])

  useEffect(() => {
    console.log(
      `The tasks of list ${list.id} are: ${tasks?.map(task => `\n${task.id} ${task.name}`)}`,
    )
  }, [tasks])

  const [openOptions, setOpenOptions] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  const onDeleteTask = () => {
    toast.success('List deleted successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    deleteList(list.id)
  }

  return (
    <>
      <Card className="flex flex-col gap-2 min-w-60 max-w-60 h-fit max-h-[calc(100vh-8rem)] py-3 px-3 bg-appDark">
        <CardHeader className="flex justify-between relative">
          <div className="flex gap-4">
            <h2 className="text-appLight text-lg font-semibold">{list.name} </h2>
            <Badge className="bg-appPrimary">{list.tasks.length}</Badge>
          </div>
          <BsThreeDots
            size={28}
            className="p-1 rounded-sm text-gray-500 hover:bg-appLightDark/25 hover:text-appLight transition-all duration-200 cursor-pointer"
            onClick={e => {
              e.stopPropagation()
              setOpenOptions(true)
            }}
          />
          {openOptions && (
            <OptionsMenu
              close={() => setOpenOptions(false)}
              openUpdateDialog={() => setOpenUpdateDialog(true)}
              openDeleteDialog={() => setOpenConfirmDialog(true)}
            />
          )}

          <EditListTaskDialog
            list={list}
            open={openUpdateDialog}
            onClose={() => setOpenUpdateDialog(false)}
          />

          <ConfirmDialog
            onAction={onDeleteTask}
            title="Are you sure you want to delete this list?"
            open={openConfirmDialog}
            onClose={() => setOpenConfirmDialog(false)}
          />
        </CardHeader>
        <CardContent className="listTask-scrollbar pr-1 h-full flex flex-col gap-2 overflow-y-auto">
          <AnimatePresence>
            {isLoading ? (
              <>
                <SkeletonTask />
                <SkeletonTask />
                <SkeletonTask />
                <SkeletonTask />
              </>
            ) : isError ? (
              <div className="flex flex-col items-center justify-center w-full h-20 bg-background-dark rounded-md gap-2 text-red-600">
                <span>
                  <Unplug />
                </span>
                <p>Error loading task</p>
              </div>
            ) : (
              tasks?.map(task => <Task key={task.id} task={task} />)
            )}
          </AnimatePresence>
        </CardContent>
        <button
          className="flex gap-2 items-center text-appLightDark rounded-sm px-2 py-1 w-full hover:bg-appLightDark/25 cursor-pointer transition-all duration-200"
          onClick={() => setOpenAddTaskDialog(true)}
          aria-label="Add task"
        >
          <LuPlus size={16} />
          <span>Add Task</span>
        </button>
        {openAddTaskDialog && (
          <AddTaskDialog listId={list.id} onClose={() => setOpenAddTaskDialog(false)} />
        )}
      </Card>
    </>
  )
}
export default ListTask
