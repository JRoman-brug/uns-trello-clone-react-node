export type ProjectType = {
  id: number
  name: string
  lists: number[]
}

export type ListType = {
  id: number
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  tasks: number[]
}

export type TaskType = {
  id: number
  name: string
  description: string
  isCompleted: boolean
}
