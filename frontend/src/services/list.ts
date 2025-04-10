import { List, Task } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllLists = async (): Promise<List[]> => {
  return axios
    .get<List[]>(`${API_URL}/lists`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching lists:', error)
      throw error
    })
}

export const getList = async (id: number): Promise<List | undefined> => {
  return axios
    .get<List | undefined>(`${API_URL}/lists/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching task:', error)
      throw error
    })
}

export const getTasksByListId = async (id: number): Promise<Task[]> => {
  return axios
    .get<Task[]>(`${API_URL}/lists/${id}/tasks`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching list's tasks:", error)
      throw error
    })
}

export const createList = async (list: List): Promise<List> => {
  return axios
    .post<List>(`${API_URL}/lists`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating list:', error)
      throw error
    })
}

export const updateList = async (id: number, list: List): Promise<List> => {
  return axios
    .put<List>(`${API_URL}/lists`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating list:', error)
      throw error
    })
}

export const deleteList = async (id: number): Promise<void> => {
  return axios
    .delete(`${API_URL}/lists/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting list:', error)
      throw error
    })
}
