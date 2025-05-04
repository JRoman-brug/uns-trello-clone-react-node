import { Request, Response } from 'express'

import {
  getAllTasks,
  getAllTasksByList,
  createTask,
  updateTask,
  UpdateTaskStatus,
  deleteTask,
} from '../services/task.service'
import { TaskType, TaskRequestType } from '../types/dataTypes'

export const all = async (req: Request, res: Response) => {
  try {
    const { listId } = req.query
    const result = listId ? await getAllTasksByList(listId as string) : await getAllTasks()
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const task: TaskRequestType = req.body

    if (!task.name || !task.description)
      return res.status(400).send({ message: 'Name and description are required' })

    const result = await createTask(task)

    return res.status(201).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const task: TaskType = req.body

    if (!task.name || !task.description)
      return res.status(400).send({ message: 'Name and description are required' })

    const result = await updateTask(id, task)

    if (!result) return res.status(404).send({ message: 'Task not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { isCompleted } = req.body

    if (isCompleted === undefined)
      return res.status(400).send({ message: 'isCompleted is required' })

    const result = await UpdateTaskStatus(id, isCompleted)

    if (!result) return res.status(404).send({ message: 'Task not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await deleteTask(id)

    return res.status(200).send({ message: 'Task deleted' })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}
