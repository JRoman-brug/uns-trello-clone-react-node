import useLists from '@/hooks/useLists'
import { ListRequestType } from '@/types/dataTypes'
import { SubmitHandler, useForm } from 'react-hook-form'

interface AddListTaskDialog {
  projectId: number
  open: boolean
  onClose: () => void
}

type ListTaskForm = {
  name: string
  color: string
}
function AddListTaskDialog({ projectId, open, onClose }: AddListTaskDialog) {
  const { createList } = useLists(projectId)
  //Form
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ListTaskForm>({ defaultValues: { color: 'blue' } })

  const onCancel = () => {
    onClose()
    reset()
  }

  const onSubmit: SubmitHandler<ListTaskForm> = data => {
    console.log(data)
    const newList: ListRequestType = {
      name: data.name,
      projectId: projectId,
      color: 'blue',
    }
    createList(newList)
    reset()
    onClose()
  }

  const colors = ['red', 'blue', 'green', 'orange', 'pink']
  return (
    // overlay
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={onCancel}
    >
      {/* Content */}
      <div
        className={`w-[400px] h-fit mx-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form className="text-white flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-1" htmlFor="Name">
              Name list task
            </label>
            <input
              className="w-1/2 bg-white text-black pl-1 rounded-xs"
              {...register('name', {
                required: true,
                pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
              })}
              type="text"
              maxLength={20}
            />
            {errors.name?.type === 'required' && (
              <p role="alert" className="text-red-500">
                Only alphanumeric characters
              </p>
            )}
          </div>
          <div>
            <label className="block" htmlFor="color">
              Select a color
            </label>
            <select
              defaultValue={'blue'}
              className="bg-white text-black w-1/2"
              {...register('color')}
              name="color"
              id=""
            >
              {colors.map((elem, index) => (
                <option key={index} value={`${elem}`}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
          <div className="flex  justify-between">
            <button
              onClick={onCancel}
              className="rounded-sm px-4 py-2 transition-colors hover:bg-red-500"
            >
              Cancel
            </button>
            <input
              className="rounded-sm px-4 py-2 transition-colors hover:bg-green-500"
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
