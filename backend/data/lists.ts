import { ListType } from '../types/dataTypes'

const lists: ListType[] = [
  { id: '1', name: 'Planning', tasks: ['1', '2', '3', '4', '5'], projectId: '1' },
  { id: '2', name: 'Development', tasks: ['6', '7', '8', '9', '10'], projectId: '1' },
  { id: '3', name: 'Design', tasks: ['11', '12', '13', '14', '15'], projectId: '1' },

  { id: '4', name: 'Marketing', tasks: ['16', '17', '18', '19', '20'], projectId: '2' },
  { id: '5', name: 'SEO', tasks: ['21', '22', '23', '24', '25'], projectId: '2' },
  { id: '6', name: 'Email', tasks: ['26', '27', '28', '29', '30'], projectId: '2' },
]

export default lists
