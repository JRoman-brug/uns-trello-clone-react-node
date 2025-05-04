export type ProjectType = {
  id: string
  name: string
  gradient: [string, string]
  lists: string[]
}

export type ProjectRequestype = {
  name: string
  gradient: [string, string]
}

export type ListType = {
  id: string
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  tasks: string[]
  projectId: string
}

export type ListRequestType = {
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  projectId: string
}

export type TaskType = {
  id: string
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
  listId: string
}

export type TaskRequestType = {
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
  listId: string
}
