import express from 'express'
import cors from 'cors'

import taskRouter from './routes/task.route'
import listRouter from './routes/list.route'
import projectRouter from './routes/project.route'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/tasks', taskRouter)
app.use('/lists', listRouter)
app.use('/projects', projectRouter)

export default app
