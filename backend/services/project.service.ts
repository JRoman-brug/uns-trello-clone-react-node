import { ProjectType, ProjectRequestype } from '../types/dataTypes'
import projects from '../data/projects'
import { deleteList } from './list.service'

export const getAllProjects = async (): Promise<ProjectType[]> => {
  return await new Promise(resolve => setTimeout(() => resolve(projects), 500))
}

export const createProject = async (project: ProjectRequestype): Promise<ProjectType> => {
  const newProject: ProjectType = {
    ...project,
    id: projects.length + 1,
    lists: [],
  }
  projects.push(newProject)

  return await new Promise(resolve => setTimeout(() => resolve(newProject), 500))
}

export const updateProject = async (
  id: number,
  updatedProject: ProjectType,
): Promise<ProjectType> => {
  if (updatedProject.id !== id) throw new Error('Project ID does not match the provided project.')

  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects[projectIndex] = updatedProject

  return await new Promise(resolve => setTimeout(() => resolve(updatedProject), 500))
}

export const deleteProject = async (id: number): Promise<void> => {
  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex === -1) throw new Error('Project not found.')

  projects[projectIndex].lists.forEach(listId => deleteList(listId))

  projects.splice(projectIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
