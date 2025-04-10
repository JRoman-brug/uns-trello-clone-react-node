import { Request, Response } from 'express'
import {
  getAllProjects,
  getProject,
  getListsByProjectId,
  createProject,
  updateProject,
  deleteProject,
} from '../services/project.service'
import { Project } from '../types/dataTypes'

export const all = async (req: Request, res: Response) => {
  try {
    const result = await getAllProjects()
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await getProject(parseInt(id))

    if (!result) return res.status(404).send({ message: 'Project not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await getListsByProjectId(parseInt(id))

    if (!result) return res.status(404).send({ message: 'Project not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const project: Project = req.body

    if (!project.name) return res.status(400).send({ message: 'Name is required' })

    const result = await createProject(project)

    return res.status(201).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const project: Project = req.body

    if (!project.name) return res.status(400).send({ message: 'Name is required' })

    const result = await updateProject(parseInt(id), project)

    if (!result) return res.status(404).send({ message: 'Project not found' })

    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await deleteProject(parseInt(id))

    return res.status(200).send({ message: 'Project deleted' })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}
