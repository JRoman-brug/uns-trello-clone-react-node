export type ProjectType = {
  id: number
  name: string
  gradient: [string, string]
  lists: number[]
}

export type ListType = {
  id: number
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  tasks: number[]
}

export type TaskType = {
  id: number | null
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
}
