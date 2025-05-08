import { ListType, ListRequestType, ProjectType } from '../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'
import lists from '../data/lists'
import projects from '../data/projects'
import { deleteTask } from './task.service'

export const getAllLists = async (): Promise<ListType[]> => {
  return await new Promise(resolve => resolve(lists))
}

export const getAllListsByProject = async (projectId: string): Promise<ListType[]> => {
  const projectIndex = projects.findIndex(project => project.id === projectId)
  if (projectIndex === -1) throw new Error('Project not found.')

  return await new Promise(resolve =>
    resolve(lists.filter(list => projects[projectIndex].lists.includes(list.id))),
  )
}

export const createList = async (list: ListRequestType): Promise<ListType> => {
  const newList: ListType = {
    ...list,
    id: uuidv4(),
    tasks: [],
  }
  const projectIndex = projects.findIndex(project => project.id === list.projectId)
  if (projectIndex === -1) throw new Error('Project not found.')
  projects[projectIndex].lists.push(newList.id)
  lists.push(newList)

  return await new Promise(resolve => resolve(newList))
}

export const updateList = async (id: string, updatedList: ListType): Promise<ListType> => {
  if (updatedList.id !== id) throw new Error('List ID does not match the provided list.')

  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists[listIndex] = updatedList

  return await new Promise(resolve => resolve(updatedList))
}

export const deleteList = async (id: string): Promise<void> => {
  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists[listIndex].tasks.forEach(taskId => deleteTask(taskId))

  const project = projects.find(project => project.id === lists[listIndex].projectId) as ProjectType
  project.lists = project.lists.filter(listId => listId !== id)

  lists.splice(listIndex, 1)

  return await new Promise(resolve => resolve())
}
