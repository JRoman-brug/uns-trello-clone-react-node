import { ListType } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllLists = async (projectId: number | undefined): Promise<ListType[]> => {
  return axios
    .get<ListType[]>(`${API_URL}/projects/${projectId}/lists`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching lists:', error)
      throw error
    })
}

export const createList = async ({
  projectId,
  list,
}: {
  projectId: number
  list: ListType
}): Promise<ListType> => {
  return axios
    .post<ListType>(`${API_URL}/projects/${projectId}/lists`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating list:', error)
      throw error
    })
}

export const updateList = async ({
  projectId,
  id,
  list,
}: {
  projectId: number
  id: number
  list: ListType
}): Promise<ListType> => {
  return axios
    .put<ListType>(`${API_URL}/projects/${projectId}/lists/${id}`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating list:', error)
      throw error
    })
}

export const deleteList = async ({
  projectId,
  id,
}: {
  projectId: number
  id: number
}): Promise<void> => {
  return axios
    .delete(`${API_URL}/projects/${projectId}/lists/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting list:', error)
      throw error
    })
}
