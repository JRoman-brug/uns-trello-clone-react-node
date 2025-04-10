import { Task } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllTasks = async (listId: number): Promise<Task[]> => {
  return axios
    .get<Task[]>(`${API_URL}/lists/${listId}/tasks`)
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
  task: Task
}): Promise<Task> => {
  return axios
    .post<Task>(`${API_URL}/lists/${listId}/tasks`, task)
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
  task: Task
}): Promise<Task> => {
  return axios
    .put<Task>(`${API_URL}/lists/${listId}/tasks/${id}`, task)
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
}): Promise<Task> => {
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
