import { ListType } from '../types/dataTypes'

const lists: ListType[] = [
  { id: 1, name: 'Planning', color: 'blue', tasks: [1, 2, 3, 4, 5], projectId: 1 },
  { id: 2, name: 'Development', color: 'green', tasks: [6, 7, 8, 9, 10], projectId: 1 },
  { id: 3, name: 'Design', color: 'pink', tasks: [11, 12, 13, 14, 15], projectId: 1 },

  { id: 4, name: 'Marketing', color: 'red', tasks: [16, 17, 18, 19, 20], projectId: 2 },
  { id: 5, name: 'SEO', color: 'orange', tasks: [21, 22, 23, 24, 25], projectId: 2 },
  { id: 6, name: 'Email', color: 'blue', tasks: [26, 27, 28, 29, 30], projectId: 2 },
]

export default lists
