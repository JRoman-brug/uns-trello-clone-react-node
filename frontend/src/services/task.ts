import { TaskType, TaskRequestType } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllTasks = async (listId: string | undefined): Promise<TaskType[]> => {
  return axios
    .get<TaskType[]>(`${API_URL}/tasks?listId=${listId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching tasks:', error)
      throw error
    })
}

export const createTask = async (task: TaskRequestType): Promise<TaskType> => {
  return axios
    .post<TaskType>(`${API_URL}/tasks`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating task:', error)
      throw error
    })
}

export const updateTask = async ({
  id,
  task,
}: {
  id: string
  task: TaskType
}): Promise<TaskType> => {
  return axios
    .put<TaskType>(`${API_URL}/tasks/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task:', error)
      throw error
    })
}

export const updateTaskStatus = async ({
  id,
  isCompleted,
}: {
  id: string
  isCompleted: boolean
}): Promise<TaskType> => {
  return axios
    .patch(`${API_URL}/tasks/${id}`, { isCompleted })
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task status:', error)
      throw error
    })
}

export const deleteTask = async (id: string): Promise<void> => {
  return axios
    .delete<void>(`${API_URL}/tasks/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting task:', error)
      throw error
    })
}
