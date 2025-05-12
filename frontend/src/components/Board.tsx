import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Unplug } from 'lucide-react'
import { toast } from 'react-toastify'
import useLists from '../hooks/useLists'
import ListTaskSkeleton from './listTask/ListTaskSkeleton'
import ListTask from './listTask/ListTask'
import AddListTaskDialog from './listTask/AddListTaskDialog'

function Board() {
  const { id } = useParams()
  const { lists, isLoading, isError } = useLists(id)

  useEffect(() => {
    if (isError) {
      toast.error('Error loading lists', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    }
  }, [isError])

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)] gap-5 p-4 overflow-x-auto app-scrollbar">
      {isLoading ? (
        <>
          <ListTaskSkeleton />
          <ListTaskSkeleton />
          <ListTaskSkeleton />
          <ListTaskSkeleton />
        </>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center w-[250px] h-[100px] bg-background-dark rounded-md gap-2 text-red-600">
          <span>
            <Unplug />
          </span>
          <p>Error loading lists</p>
        </div>
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
        projectId={id || ''}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  )
}

export default Board
