export type ProjectType = {
  id: number
  name: string
  gradient: [string, string]
  lists: number[]
}

export type ProjectRequestype = {
  name: string
  gradient: [string, string]
}

export type ListType = {
  id: number
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  tasks: number[]
  projectId: number
}

export type ListRequestType = {
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  projectId: number
}

export type TaskType = {
  id: number
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
  listId: number
}

export type TaskRequestType = {
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
  listId: number
}
