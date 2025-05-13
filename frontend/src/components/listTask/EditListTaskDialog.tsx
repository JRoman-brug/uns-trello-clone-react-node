import { ListType } from '../../types/dataTypes'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import useLists from '../../hooks/useLists'
import { useEffect } from 'react'

interface EditListTaskDialog {
  list: ListType
  open: boolean
  onClose: () => void
}

type ListTaskForm = {
  name: string
}

function EditListTaskDialog({ list, open, onClose }: EditListTaskDialog) {
  const { updateList } = useLists(list.projectId)
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ListTaskForm>({ defaultValues: { name: '' } })

  useEffect(() => {
    if (open && list) {
      reset({ name: list.name })
    }
  }, [open, list, reset])

  const onCancel = () => {
    onClose()
    reset()
  }

  const onSubmit: SubmitHandler<ListTaskForm> = data => {
    const newList: ListType = {
      ...list,
      name: data.name,
    }
    toast.success('List update successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    updateList({ id: list.id, list: newList })

    reset()
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={onCancel}
    >
      <div
        className={`w-[400px] h-fit mx-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form
          className="text-white flex flex-col justify-center items-center gap-4 w-full"
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
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Name">Name list task</label>
            <input
              className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700 "
              {...register('name', {
                required: true,
                pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
              })}
              type="text"
              maxLength={20}
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="cursor-pointer w-1/3 p-1 rounded-sm bg-appSecondary hover:bg-appSecondary/75 hover:scale-102 hover:text-white transition-all duration-200"
          />
        </form>
      </div>
    </div>
  )
}

export default EditListTaskDialog
