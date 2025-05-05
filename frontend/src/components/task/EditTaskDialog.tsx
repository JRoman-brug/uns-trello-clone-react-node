//React-hook-form
import { useForm, SubmitHandler } from 'react-hook-form'

import useTasks from '@/hooks/useTasks'
import { TaskType } from '@/types/dataTypes'

interface EditTaskDialog {
  task: TaskType
  open: boolean
  onClose: () => void
}
type TaskForm = {
  name: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  description: string
}
function EditTaskDialog({ task, open, onClose }: EditTaskDialog) {
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
    onClose()
  }

  const taskType = ['Design', 'Development', 'Testing', 'Deployment']
  return (
    // Overlay
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={onCancel}
    >
      {/* Content */}
      <div
        className={`w-xl h-fit mx-4 flex flex-col gap-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white font-app font-normal flex flex-col gap-2"
        >
          <div>
            <label htmlFor="name" className="block mb-1 ">
              Task name
            </label>
            <div className="flex justify-start items-center gap-2">
              <input
                {...register('name', {
                  maxLength: 20,
                  min: 3,
                  pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                  required: true,
                })}
                id="name"
                placeholder="Name"
                className="w-48 h-8 text-black bg-appLight rounded-xs p-2 outline-none placeholder:text-gray-700"
                defaultValue={task.name}
              />

              {errors.name?.type === 'required' && (
                <p role="alert" className="text-red-500">
                  Name es required
                </p>
              )}
              {errors.name?.type === 'maxLength' && (
                <p role="alert" className="text-red-500">
                  Max length is 20 characters
                </p>
              )}
              {errors.name?.type === 'pattern' && (
                <p role="alert" className="text-red-500">
                  Only alphanumeric characters
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="typeTask" className="block mb-1">
              Type task
            </label>
            <select
              {...register('type', {
                required: true,
              })}
              className="w-48 h-8 text-black bg-appLight rounded-xs pl-2 outline-none placeholder:text-gray-700"
              defaultValue={task.type}
            >
              {taskType.map((type, index) => (
                <option key={index} className="text-black bg-appLight" value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea
              {...register('description', {
                maxLength: 250,
                required: true,
                pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
              })}
              id="description"
              placeholder="Description"
              className="w-full h-32 resize-none text-black bg-appLight rounded-xs p-2 outline-none placeholder:text-gray-700"
              defaultValue={task.description}
            />
            {errors.description?.type === 'required' && (
              <p role="alert" className="text-red-500">
                Description is required
              </p>
            )}
            {errors.description?.type === 'pattern' && (
              <p role="alert" className="text-red-500">
                Only alphanumeric characters
              </p>
            )}
          </div>
          <button className="bg-app">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditTaskDialog
