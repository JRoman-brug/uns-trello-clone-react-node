import { ListType, ListRequestType } from '../types/dataTypes'
import lists from '../data/lists'
import projects from '../data/projects'
import { deleteTask } from './task.service'

export const getAllLists = async (): Promise<ListType[]> => {
  return await new Promise(resolve => setTimeout(() => resolve(lists), 500))
}

export const getAllListsByProject = async (projectId: number): Promise<ListType[]> => {
  const projectIndex = projects.findIndex(project => project.id === projectId)
  if (projectIndex === -1) throw new Error('Project not found.')

  return await new Promise(resolve =>
    setTimeout(
      () => resolve(lists.filter(list => projects[projectIndex].lists.includes(list.id))),
      500,
    ),
  )
}

export const createList = async (list: ListRequestType): Promise<ListType> => {
  const newList: ListType = {
    ...list,
    id: lists.length + 1,
    tasks: [],
  }
  const projectIndex = projects.findIndex(project => project.id === list.projectId)
  if (projectIndex === -1) throw new Error('Project not found.')
  projects[projectIndex].lists.push(newList.id)
  lists.push(newList)

  return await new Promise(resolve => setTimeout(() => resolve(newList), 500))
}

export const updateList = async (id: number, updatedList: ListType): Promise<ListType> => {
  if (updatedList.id !== id) throw new Error('List ID does not match the provided list.')

  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists[listIndex] = updatedList

  return await new Promise(resolve => setTimeout(() => resolve(updatedList), 500))
}

export const deleteList = async (id: number): Promise<void> => {
  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists[listIndex].tasks.forEach(taskId => deleteTask(taskId))

  lists.splice(listIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
