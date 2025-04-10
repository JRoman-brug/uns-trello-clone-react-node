import { Project } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllProjects = async (): Promise<Project[]> => {
  return axios
    .get(`${API_URL}/projects`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching projects:', error)
      throw error
    })
}

export const createProject = async (project: Project): Promise<Project> => {
  return axios
    .post<Project>(`${API_URL}/projects`, project)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating project:', error)
      throw error
    })
}

export const updateProject = async ({
  id,
  project,
}: {
  id: number
  project: Project
}): Promise<Project> => {
  return axios
    .put<Project>(`${API_URL}/projects/${id}`, project)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating project:', error)
      throw error
    })
}

export const deleteProject = async (id: number): Promise<void> => {
  return axios
    .delete<void>(`${API_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting project:', error)
      throw error
    })
}
