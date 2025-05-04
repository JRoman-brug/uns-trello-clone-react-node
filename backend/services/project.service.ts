import { ProjectType, ProjectRequestype } from '../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'
import projects from '../data/projects'
import { deleteList } from './list.service'

export const getAllProjects = async (): Promise<ProjectType[]> => {
  return await new Promise(resolve => resolve(projects))
}

export const createProject = async (project: ProjectRequestype): Promise<ProjectType> => {
  const newProject: ProjectType = {
    ...project,
    id: uuidv4(),
    lists: [],
  }
  projects.push(newProject)

  return await new Promise(resolve => resolve(newProject))
}

export const updateProject = async (
  id: string,
  updatedProject: ProjectType,
): Promise<ProjectType> => {
  if (updatedProject.id !== id) throw new Error('Project ID does not match the provided project.')

  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects[projectIndex] = updatedProject

  return await new Promise(resolve => resolve(updatedProject))
}

export const deleteProject = async (id: string): Promise<void> => {
  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects[projectIndex].lists.forEach(listId => deleteList(listId))
  projects.splice(projectIndex, 1)

  return await new Promise(resolve => resolve())
}
