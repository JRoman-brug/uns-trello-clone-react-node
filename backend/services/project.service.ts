import { List, Project } from '../types/dataTypes'
import projects from '../data/projects'

export const getAllProjects = async (): Promise<Project[]> => {
  return await new Promise(resolve => setTimeout(() => resolve(projects), 500))
}

export const createProject = async (project: Project): Promise<Project> => {
  if (project.id) throw new Error('Project ID should not be provided when creating a new project.')

  project.id = projects.length + 1
  projects.push(project)

  return await new Promise(resolve => setTimeout(() => resolve(project), 500))
}

export const updateProject = async (id: number, updatedProject: Project): Promise<Project> => {
  if (updatedProject.id !== id) throw new Error('Project ID does not match the provided project.')

  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects[projectIndex] = updatedProject

  return await new Promise(resolve => setTimeout(() => resolve(updatedProject), 500))
}

export const deleteProject = async (id: number): Promise<void> => {
  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects.splice(projectIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
