import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import useTasks from '../../hooks/useTasks'
import { TaskType } from '../../types/dataTypes'

interface EditTaskDialog {
  task: TaskType
  isOpen: boolean
  onClose: () => void
}
type TaskForm = {
  name: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  description: string
}
function EditTaskDialog({ task, isOpen, onClose }: EditTaskDialog) {
  const { updateTask } = useTasks(task.listId)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskForm>()

  const onCancel = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose()
  }

  const onSubmit: SubmitHandler<TaskForm> = data => {
    const newTask: TaskType = {
      ...task,
      name: data.name,
      description: data.description,
      type: data.type,
    }
    updateTask({ id: task.id, task: newTask })
    toast.success('Task updated successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    onClose()
  }

  const taskType = ['Design', 'Development', 'Testing', 'Deployment']
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-appLight justify-center items-center w-full"
        >
          <div className="w-full">
            <p role="alert" className="text-red-500 h-4">
              {errors.name?.type === 'required'
                ? 'Name is required'
                : errors.name?.type === 'pattern' || errors.description?.type === 'pattern'
                  ? 'Only alphanumeric characters'
                  : errors.description?.type === 'required'
                    ? 'Description is required'
                    : ''}
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-2 items-center w-full md:w-3/4">
            <div className="flex flex-col gap-2 w-full md:w-7/16">
              <label htmlFor="name" className="block mb-1 ">
                Task name
              </label>
              <input
                {...register('name', {
                  maxLength: 20,
                  min: 3,
                  pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                  required: true,
                })}
                id="name"
                placeholder="Name"
                className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
                defaultValue={task.name}
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-7/16">
              <label htmlFor="typeTask">Type task</label>
              <select
                {...register('type', {
                  required: true,
                })}
                className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
                defaultValue={task.type}
              >
                {taskType.map((type, index) => (
                  <option key={index} className="text-black bg-appLight" value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="description">Description</label>
              <textarea
                {...register('description', {
                  maxLength: 250,
                  required: true,
                  pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                })}
                id="description"
                placeholder="Description"
                className="w-full h-32 resize-none text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
              />
            </div>
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

export default EditTaskDialog
