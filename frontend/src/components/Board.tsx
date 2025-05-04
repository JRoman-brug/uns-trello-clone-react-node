import { useParams } from 'react-router-dom'
import useLists from '../hooks/useLists'
import ListTask from './listTask/ListTask'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddListTaskDialog from './listTask/AddListTaskDialog'

function Board() {
  const { id } = useParams()
  const { lists, isLoading, isError } = useLists(id)

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)] gap-5 p-4 overflow-x-auto">
      {isLoading ? (
        <p>Loading lists...</p>
      ) : isError ? (
        <p className="text-red-600">Error loading lists</p>
      ) : (
        lists?.map(list => <ListTask key={list.id} list={list} />)
      )}
      <div
        onClick={() => setOpenModal(true)}
        className="w-[250px] h-[100px] shrink-0 flex justify-center items-center cursor-pointer border-[3px] border-white border-dashed hover:scale-105 transition-all duration-200 ease-in-out"
      >
        <FaPlus size={30} className="text-white" />
      </div>
      <AddListTaskDialog
        projectId={Number(id)}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  )
}

export default Board
