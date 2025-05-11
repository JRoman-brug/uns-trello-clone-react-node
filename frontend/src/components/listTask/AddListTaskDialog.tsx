import useLists from '../../hooks/useLists'
import { ListRequestType } from '../../types/dataTypes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface AddListTaskDialog {
  projectId: string
  isOpen: boolean
  onClose: () => void
}

type ListTaskForm = {
  name: string
}
function AddListTaskDialog({ projectId, isOpen, onClose }: AddListTaskDialog) {
  const { createList } = useLists(projectId)
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ListTaskForm>()

  const onCancel = () => {
    onClose()
    reset()
  }

  const onSubmit: SubmitHandler<ListTaskForm> = data => {
    console.log(data)
    const newList: ListRequestType = {
      name: data.name,
      projectId: projectId,
    }
    toast.success('List created successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    createList(newList)
    reset()
    onClose()
  }
  return (
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-1000 flex justify-center items-center transition-colors ${isOpen ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={onCancel}
    >
      <div
        className={`w-xl h-fit bg-background-dark-accent z-150 rounded-sm shadow px-6 py-4 transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form
          className="flex flex-col gap-4 text-appLight justify-center items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <p role="alert" className="text-red-500 h-4">
              {errors.name?.type === 'required'
                ? 'Name is required'
                : errors.name?.type === 'pattern'
                  ? 'Only alphanumeric characters'
                  : ''}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-end w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Name">Name list task</label>
              <input
                className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
                {...register('name', {
                  required: true,
                  pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                })}
                type="text"
                maxLength={20}
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <button
              onClick={onCancel}
              className="text-white rounded-sm px-4 py-2 transition-colors cursor-pointer bg-red-500 md:bg-[#0000] hover:bg-red-500"
            >
              Cancel
            </button>
            <input
              className="text-white rounded-sm px-4 py-2 transition-colors cursor-pointer bg-green-500 md:bg-[#0000] hover:bg-green-500"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddListTaskDialog
