import { useParams } from 'react-router-dom'
import useLists from '../hooks/useLists'
import ListTask from './listTask/ListTask'

function Board() {
  const { id } = useParams()
  const { lists, isLoading, isError } = useLists(id ? parseInt(id) : undefined)
  return (
    <div className="flex w-fit gap-5 p-4 overflow-x-auto">
      {isLoading ? (
        <p>Loading lists...</p>
      ) : isError ? (
        <p className="text-red-600">Error loading lists</p>
      ) : (
        lists?.map(list => <ListTask key={list.id} list={list} />)
      )}
    </div>
  )
}

export default Board
