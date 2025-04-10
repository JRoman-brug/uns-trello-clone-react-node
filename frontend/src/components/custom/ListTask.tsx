import { List } from "types/dataTypes"
import { Card, CardContent, CardHeader } from "../ui/card"
import TaskCard from "./Task"
import { tasks } from "../../../dev/mockupData"
import { Plus } from "lucide-react"
import { Badge } from "../ui/badge"
interface props{
    list:List
}
function ListTask({list}:props) {
    return (
        <Card className="min-w-80 h-full font-app ">
            <CardHeader className="flex justify-start relative font-bold">
                <h2>{list.name} </h2>
                <Badge className="bg-appPrimary">{list.tasks.length}</Badge>
                <button className="absolute right-8 p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Plus/></button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 overflow-y-scroll">
                {tasks.map((task,index)=>
                    <TaskCard key={index} task={task}></TaskCard>
                )}
            </CardContent>
        </Card>
    )
}

export default ListTask