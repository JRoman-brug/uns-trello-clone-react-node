import { ListType, ListRequestType } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllLists = async (projectId: string | undefined): Promise<ListType[]> => {
  return axios
    .get<ListType[]>(`${API_URL}/lists?projectId=${projectId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching lists:', error)
      throw error
    })
}

export const createList = async (list: ListRequestType): Promise<ListType> => {
  return axios
    .post<ListType>(`${API_URL}/lists`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating list:', error)
      throw error
    })
}

export const updateList = async ({
  id,
  list,
}: {
  id: string
  list: ListType
}): Promise<ListType> => {
  return axios
    .put<ListType>(`${API_URL}/lists/${id}`, list)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating list:', error)
      throw error
    })
}

export const deleteList = async (id: string): Promise<void> => {
  return axios
    .delete(`${API_URL}/lists/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting list:', error)
      throw error
    })
}
