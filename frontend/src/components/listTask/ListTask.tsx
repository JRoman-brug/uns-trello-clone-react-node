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

interface props {
  list: ListType
}

function ListTask({ list }: props) {
  const { id } = useParams()
  const { deleteList } = useLists(id)
  const { tasks, isLoading, isError, deleteTask } = useTasks(list.id)

  useEffect(() => {
    console.log(
      `The tasks of list ${list.id} are: ${tasks?.map(task => `\n${task.id} ${task.name}`)}`,
    )
  }, [tasks])

  const [openOptions, setOpenOptions] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  return (
    <>
      <Card className="flex flex-col gap-2 min-w-60 max-w-60 h-fit max-h-[calc(100vh-8rem)] p-2 bg-appDark">
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
          {openUpdateDialog /* TODO EditListDialog */}
          <ConfirmDialog
            onAction={() => deleteList(list.id)}
            title="Are you sure you want to delete this list?"
            open={openConfirmDialog}
            onClose={() => setOpenConfirmDialog(false)}
          />
        </CardHeader>
        <CardContent className="h-full flex flex-col gap-2 overflow-y-auto">
          <AnimatePresence>
            {isLoading ? (
              <>
                <SkeletonTask />
                <SkeletonTask />
                <SkeletonTask />
                <SkeletonTask />
              </>
            ) : isError ? (
              <p className="text-red-600">Error loading tasks</p>
            ) : (
              tasks?.map(task => (
                <Task key={task.id} task={task} onClick={() => deleteTask(task.id)} />
              ))
            )}
          </AnimatePresence>
        </CardContent>
        <button
          className="flex gap-2 items-center text-appLightDark rounded-sm px-2 py-1 w-full hover:bg-appLightDark/25 cursor-pointer transition-all duration-200"
          onClick={() => setOpenAddTaskDialog(true)}
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
