import { List } from '@/types/dataTypes'
import { Card, CardContent, CardHeader } from '../ui/card'
import TaskCard from './Task'
import { tasks } from '../../../dev/mockupData'
import { Plus, Trash2 } from 'lucide-react'
import { Badge } from '../ui/badge'
import AddTask from './addTask'
interface props {
  list: List
}
function ListTask({ list }: props) {
  return (
    <Card className="min-w-96 h-full font-app ">
      <CardHeader className="flex justify-between relative font-bold">
        <div className="flex">
          <h2 className="mr-3">{list.name} </h2>
          <Badge className="bg-appPrimary">{list.tasks.length}</Badge>
        </div>
        <div className="flex gap-2">
          <AddTask>
            <button className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight">
              <Plus />
            </button>
          </AddTask>
          <button className="p-1 rounded-md  text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight">
            <Trash2 size={20} />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 overflow-y-scroll">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task}></TaskCard>
        ))}
      </CardContent>
    </Card>
  )
}

export default ListTask
