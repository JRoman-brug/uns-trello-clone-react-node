import { Task } from '../types/dataTypes'
import tasks from '../data/tasks'
import lists from '../data/lists'

export const getAllTasks = async (listId: number): Promise<Task[]> => {
  const listIndex = lists.findIndex(list => list.id === listId)
  if (listIndex === -1) throw new Error('List not found.')

  return await new Promise(resolve =>
    setTimeout(() => resolve(tasks.filter(task => lists[listIndex].tasks.includes(task.id))), 500),
  )
}

export const createTask = async (task: Task): Promise<Task> => {
  if (task.id) throw new Error('Task ID should not be provided when creating a new task.')

  task.id = tasks.length + 1
  task.isCompleted = false
  tasks.push(task)

  return await new Promise<Task>(resolve => setTimeout(() => resolve(task), 500))
}

export const updateTask = async (id: number, updatedTask: Task): Promise<Task> => {
  if (updatedTask.id !== id) throw new Error('Task ID does not match the provided task.')

  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex] = updatedTask

  return await new Promise<Task>(resolve => setTimeout(() => resolve(updatedTask), 500))
}

export const UpdateTaskStatus = async (id: number, isCompleted: boolean): Promise<Task> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks[taskIndex].isCompleted = isCompleted

  return await new Promise<Task>(resolve => setTimeout(() => resolve(tasks[taskIndex]), 500))
}

export const deleteTask = async (id: number): Promise<void> => {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) throw new Error('Task not found.')

  tasks.splice(taskIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
