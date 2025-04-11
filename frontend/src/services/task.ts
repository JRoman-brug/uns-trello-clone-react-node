import { TaskType } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllTasks = async (listId: number | undefined): Promise<TaskType[]> => {
  return axios
    .get<TaskType[]>(`${API_URL}/lists/${listId}/tasks`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching tasks:', error)
      throw error
    })
}

export const createTask = async ({
  listId,
  task,
}: {
  listId: number
  task: TaskType
}): Promise<TaskType> => {
  return axios
    .post<TaskType>(`${API_URL}/lists/${listId}/tasks`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating task:', error)
      throw error
    })
}

export const updateTask = async ({
  listId,
  id,
  task,
}: {
  listId: number
  id: number
  task: TaskType
}): Promise<TaskType> => {
  return axios
    .put<TaskType>(`${API_URL}/lists/${listId}/tasks/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task:', error)
      throw error
    })
}

export const updateTaskStatus = async ({
  listId,
  id,
  isCompleted,
}: {
  listId: number
  id: number
  isCompleted: boolean
}): Promise<TaskType> => {
  return axios
    .patch(`${API_URL}/lists/${listId}/tasks/${id}`, { isCompleted })
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task status:', error)
      throw error
    })
}

export const deleteTask = async ({ listId, id }: { listId: number; id: number }): Promise<void> => {
  return axios
    .delete<void>(`${API_URL}/lists/${listId}/tasks/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting task:', error)
      throw error
    })
}
