import { TaskType, TaskRequestType } from '../types/dataTypes'
import tasks from '../data/tasks'
import lists from '../data/lists'

export const getAllTasks = async () => {
  return await new Promise(resolve => setTimeout(() => resolve(tasks), 500))
}

export const getAllTasksByList = async (listId: number): Promise<TaskType[]> => {
  const listIndex = lists.findIndex(list => list.id === listId)
  if (listIndex === -1) throw new Error('List not found.')

  const filteredTasks = tasks.filter(task => lists[listIndex].tasks.includes(task.id))

  return await new Promise(resolve => setTimeout(() => resolve(filteredTasks), 500))
}

export const createTask = async (task: TaskRequestType): Promise<TaskType> => {
  const newTask: TaskType = {
    id: tasks.length + 1,
    ...task,
    isCompleted: false,
  }
  const listIndex = lists.findIndex(list => list.id === task.listId)
  if (listIndex === -1) throw new Error('List not found.')
  lists[listIndex].tasks.push(newTask.id)
  tasks.push(newTask)

  return await new Promise(resolve => setTimeout(() => resolve(newTask), 500))
}

export const updateTask = async (id: number, updatedTask: TaskType): Promise<TaskType> => {
  if (updatedTask.id !== id) throw new Error('Task ID does not match the provided task.')

  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex] = updatedTask

  return await new Promise(resolve => setTimeout(() => resolve(updatedTask), 500))
}

export const UpdateTaskStatus = async (id: number, isCompleted: boolean): Promise<TaskType> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex].isCompleted = isCompleted

  return await new Promise(resolve => setTimeout(() => resolve(tasks[taskIndex]), 500))
}

export const deleteTask = async (id: number): Promise<void> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks.splice(taskIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
