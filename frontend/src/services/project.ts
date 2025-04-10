import { Project, List } from '../types/dataTypes'
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

export const getProject = async (id: number): Promise<Project | undefined> => {
  return axios
    .get<Project | undefined>(`${API_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching project:', error)
      throw error
    })
}

export const getListsByProjectId = async (id: number): Promise<List[]> => {
  return axios
    .get<List[]>(`${API_URL}/projects/${id}/lists`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetcing project's lists:", error)
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

export const updateProject = async (id: number, project: Project): Promise<Project> => {
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
