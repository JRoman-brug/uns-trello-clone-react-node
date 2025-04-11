export type Project = {
  id: number
  name: string
  gradient: [string, string]
  lists: number[]
}

export type List = {
  id: number
  name: string
  color: 'red' | 'blue' | 'green' | 'orange' | 'pink'
  tasks: number[]
}

export type Task = {
  id: number
  name: string
  description: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  isCompleted: boolean
}
