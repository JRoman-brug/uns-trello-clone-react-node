import { ProjectType, ProjectRequestype } from '../types/dataTypes'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllProjects = async (): Promise<ProjectType[]> => {
  return axios
    .get(`${API_URL}/projects`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching projects:', error)
      throw error
    })
}

export const createProject = async (project: ProjectRequestype): Promise<ProjectType> => {
  return axios
    .post<ProjectType>(`${API_URL}/projects`, project)
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
  id: string
  project: ProjectType
}): Promise<ProjectType> => {
  return axios
    .put<ProjectType>(`${API_URL}/projects/${id}`, project)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating project:', error)
      throw error
    })
}

export const deleteProject = async (id: string): Promise<void> => {
  return axios
    .delete<void>(`${API_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting project:', error)
      throw error
    })
}
