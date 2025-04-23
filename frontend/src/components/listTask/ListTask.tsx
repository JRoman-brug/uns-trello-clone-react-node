import { ListType } from '@/types/dataTypes'

//Componets
import Task from '@/components/task/Task'
import AddTaskDialog from '@/components/task/AddTaskDialog'
//Hooks
import useTasks from '@/hooks/useTasks'
import useLists from '@/hooks/useLists'
//Motion
import { useParams } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
//Shadcn
import { Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import SkeletonTask from '../task/SkeletonTask'
import { useState } from 'react'
import ConfirmDialog from '../dialog/confirmDialog'

interface props {
  list: ListType
}

function ListTask({ list }: props) {
  const { id } = useParams()
  const { deleteList } = useLists(id ? parseInt(id) : undefined)
  const { tasks, isLoading, isError, deleteTask } = useTasks(list.id)

  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false)
  const [openConfirmDialog, setConfirmDialog] = useState(false)
  return (
    <>
      <Card className="min-w-96 h-full font-app ">
        <CardHeader className="flex justify-between relative font-bold">
          <div className="flex">
            <h2 className="mr-3">{list.name} </h2>
            <Badge className="bg-appPrimary">{list.tasks.length}</Badge>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setOpenAddTaskDialog(true)}
              className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"
            >
              <Plus />
            </button>
            <AddTaskDialog
              listId={list.id}
              open={openAddTaskDialog}
              onClose={() => setOpenAddTaskDialog(false)}
            />

            <button
              className="p-1 rounded-md  text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"
              onClick={() => setConfirmDialog(true)}
            >
              <Trash2 size={20} />
            </button>

            <ConfirmDialog
              onAction={() => deleteList(list.id)}
              title="Are you sure you want to delete this list?"
              open={openConfirmDialog}
              onClose={() => setConfirmDialog(false)}
            />
          </div>
        </CardHeader>
        <CardContent className="h-full flex flex-col gap-2 pt-2 overflow-y-scroll">
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
      </Card>
    </>
  )
}
export default ListTask
