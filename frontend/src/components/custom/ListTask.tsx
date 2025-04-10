import { List } from "types/dataTypes"
import { Card, CardContent, CardHeader } from "../ui/card"
import TaskCard from "./Task"
import { tasks } from "../../../dev/mockupData"
import { Pen, Plus } from "lucide-react"
import { Badge } from "../ui/badge"
interface props{
    list:List
}
function ListTask({list}:props) {
    return (
        <Card className="min-w-96 h-full font-app ">
            <CardHeader className="flex justify-between relative font-bold">
                <div className="flex">
                    <h2 className="mr-3">{list.name} </h2>
                    <Badge className="bg-appPrimary">{list.tasks.length}</Badge>
                </div>
                <div className="flex">
                    <button className="p-1 rounded-md mr-2 text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Pen size={20}/></button>
                    <button className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Plus/></button>
                </div>
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