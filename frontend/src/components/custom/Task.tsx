import { Task } from "types/dataTypes"
import { Badge } from "../ui/badge"
import { Trash2 } from "lucide-react"
import { motion } from "motion/react"
interface props {
    task: Task
}

function TaskCard({ task }: props) {
    return (
        <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            className="bg-appLight h-32 rounded-lg py-2 px-3"
        >
            <Badge className="bg-appPrimary">Diseño</Badge>
            <div className="flex justify-between items-center">
                <h2>{task.name}</h2>
                <button className=" p-1 rounded-md text-gray-500 transition-colors hover:bg-appPrimary hover:text-appLight"><Trash2 /></button>
            </div>
        </motion.div>
    )
}

export default TaskCard