import { List, Task } from '../types/dataTypes'
import lists from '../data/lists'
import projects from '../data/projects'

export const getAllLists = async (projectId: number): Promise<List[]> => {
  console.log(projectId)
  const projectIndex = projects.findIndex(project => project.id === projectId)
  if (projectIndex === -1) throw new Error('Project not found.')

  return await new Promise(resolve =>
    setTimeout(
      () => resolve(lists.filter(list => projects[projectIndex].lists.includes(list.id))),
      500,
    ),
  )
}

export const createList = async (list: List): Promise<List> => {
  if (list.id) throw new Error('List ID should not be provided when creating a new list.')

  list.id = lists.length + 1
  lists.push(list)

  return await new Promise(resolve => setTimeout(() => resolve(list), 500))
}

export const updateList = async (id: number, updatedList: List): Promise<List> => {
  if (updatedList.id !== id) throw new Error('List ID does not match the provided list.')

  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists[listIndex] = updatedList

  return await new Promise(resolve => setTimeout(() => resolve(updatedList), 500))
}

export const deleteList = async (id: number): Promise<void> => {
  const listIndex = lists.findIndex(list => list.id === id)
  if (listIndex === -1) throw new Error('List not found.')

  lists.splice(listIndex, 1)

  return await new Promise(resolve => setTimeout(() => resolve(), 500))
}
