import { useParams } from 'react-router-dom'
import useLists from '../hooks/useLists'
import ListTask from './ListTask'

function Board() {
  const { id } = useParams()
  const { lists, isLoading, isError } = useLists(id ? parseInt(id) : undefined)
  return (
    <main className="flex w-fit gap-5 p-4 overflow-x-auto">
      {isLoading ? (
        <p>Loading lists...</p>
      ) : isError ? (
        <p className="text-red-600">Error loading lists</p>
      ) : (
        lists?.map(list => <ListTask key={list.id} list={list} />)
      )}
    </main>
  )
}

export default Board
