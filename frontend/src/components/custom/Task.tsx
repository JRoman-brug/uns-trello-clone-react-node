import { Task } from "types/dataTypes"
import { Badge } from "../ui/badge"
import { Pen, Trash2 } from "lucide-react"
import { motion } from "motion/react"
interface props {
    task: Task
}

function TaskCard({ task }: props) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-appLight h-32 rounded-lg py-2 px-3"
        >
            <Badge className="bg-appPrimary">Diseño</Badge>
            <div className="flex justify-between items-center">
                <h3>{task.name}</h3>
                <div className="flex">
                    <button className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Pen size={20} /></button>
                    <button className="p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Trash2 size={20} /></button>
                </div>
            </div>
        </motion.div>
    )
}

export default TaskCard