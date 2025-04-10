import { Task } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllTasks = async (): Promise<Task[]> => {
  return axios
    .get<Task[]>(`${API_URL}/tasks`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching tasks:', error)
      throw error
    })
}

export const getTask = async (id: number): Promise<Task> => {
  return axios
    .get<Task>(`${API_URL}/tasks/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching task:', error)
      throw error
    })
}

export const createTask = async (task: Task): Promise<Task> => {
  return axios
    .post<Task>(`${API_URL}/tasks`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating task:', error)
      throw error
    })
}

export const updateTask = async (id: number, task: Task): Promise<Task> => {
  return axios
    .put<Task>(`${API_URL}/tasks/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task:', error)
      throw error
    })
}

export const updateTaskStatus = async (id: number, isCompleted: boolean): Promise<Task> => {
  return axios
    .patch(`${API_URL}/tasks/${id}`, { isCompleted })
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating task status:', error)
      throw error
    })
}

export const deleteTask = async (id: number): Promise<void> => {
  return axios
    .delete<void>(`${API_URL}/tasks/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting task:', error)
      throw error
    })
}
