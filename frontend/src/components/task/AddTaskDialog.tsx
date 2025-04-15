import { ReactNode, useState } from 'react'
//Shadcn
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
//React-hook-form
import { useForm, SubmitHandler } from 'react-hook-form'

import useTasks from '@/hooks/useTasks'
import { TaskRequestType } from '@/types/dataTypes'
interface props {
  listId: number
  children: ReactNode
}

type TaskForm = {
  name: string
  type: 'Design' | 'Development' | 'Testing' | 'Deployment'
  description: string
}

function AddTask({ listId, children }: props) {
  const { createTask } = useTasks(listId)
  const [open, setOpen] = useState(false)
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TaskForm>()
  const onSubmit: SubmitHandler<TaskForm> = data => {
    const task: TaskRequestType = {
      name: data.name,
      description: data.description,
      type: data.type,
      isCompleted: false,
      listId: listId,
    }
    createTask(task)
    setOpen(false)
    reset()
  }

  const taskType = ['Design', 'Development', 'Testing', 'Deployment']
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="text-white bg-background-dark border-background-dark"
        onInteractOutside={() => reset()}
        onCloseAutoFocus={() => reset()}
      >
        <DialogTitle>Add new Task</DialogTitle>
        <DialogDescription asChild>
          <form onSubmit={handleSubmit(onSubmit)} className="text-white flex flex-col gap-2">
            <div>
              <label htmlFor="name" className="block mb-1">
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
                defaultValue={'Desing'}
                {...register('type', {
                  required: true,
                })}
                className="w-48 h-8 text-black bg-appLight rounded-xs pl-2 outline-none placeholder:text-gray-700"
              >
                {taskType.map(type => (
                  <option key={type} className="text-black bg-appLight" value={type}>
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
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AddTask
