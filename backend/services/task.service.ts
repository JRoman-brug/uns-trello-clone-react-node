import { TaskType, TaskRequestType } from '../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'
import tasks from '../data/tasks'
import lists from '../data/lists'

export const getAllTasks = async () => {
  return await new Promise(resolve => resolve(tasks))
}

export const getAllTasksByList = async (listId: string): Promise<TaskType[]> => {
  const listIndex = lists.findIndex(list => list.id === listId)
  if (listIndex === -1) throw new Error('List not found.')

  const filteredTasks = tasks.filter(task => lists[listIndex].tasks.includes(task.id))

  return await new Promise(resolve => resolve(filteredTasks))
}

export const createTask = async (task: TaskRequestType): Promise<TaskType> => {
  const newTask: TaskType = {
    id: uuidv4(),
    ...task,
    isCompleted: false,
  }
  console.log(
    `The new task is ${newTask.id} ${newTask.name} and there is a total of ${tasks.length}`,
  )
  const listIndex = lists.findIndex(list => list.id === task.listId)
  if (listIndex === -1) throw new Error('List not found.')
  tasks.push(newTask)
  console.log(`Now there is a total of ${tasks.length}`)
  lists[listIndex].tasks.push(newTask.id)

  return await new Promise(resolve => resolve(newTask))
}

export const updateTask = async (id: string, updatedTask: TaskType): Promise<TaskType> => {
  if (updatedTask.id !== id) throw new Error('Task ID does not match the provided task.')

  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex] = updatedTask

  return await new Promise(resolve => resolve(updatedTask))
}

export const UpdateTaskStatus = async (id: string, isCompleted: boolean): Promise<TaskType> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex].isCompleted = isCompleted

  return await new Promise(resolve => resolve(tasks[taskIndex]))
}

export const deleteTask = async (id: string): Promise<void> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  lists.find(list => list.id === tasks[taskIndex].listId)?.tasks.filter(taskId => taskId !== id)
  tasks.splice(taskIndex, 1)

  return await new Promise(resolve => resolve())
}
