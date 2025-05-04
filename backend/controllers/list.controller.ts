import { Request, Response } from 'express'
import {
  getAllLists,
  getAllListsByProject,
  createList,
  updateList,
  deleteList,
} from '../services/list.service'
import { ListType, ListRequestType } from '../types/dataTypes'

export const all = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.query
    const result = projectId ? await getAllListsByProject(projectId as string) : await getAllLists()
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const list: ListRequestType = req.body

    if (!list.name) return res.status(400).send({ message: 'Name and color are required' })

    const result = await createList(list)

    return res.status(201).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)
    const list: ListType = req.body

    if (!list.name) return res.status(400).send({ message: 'Name and color are required' })

    const result = await updateList(id, list)

    if (!result) return res.status(404).send({ message: 'List not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await deleteList(id)

    return res.status(200).send({ message: 'List deleted' })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}
