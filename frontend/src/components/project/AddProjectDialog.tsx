//React hook form
import useProjects from '@/hooks/useProjects'
import { ProjectRequestype } from '@/types/dataTypes'
import { SubmitHandler, useForm } from 'react-hook-form'
interface AddTaskDialog {
  open: boolean
  onClose: () => void
}

type ProjectForm = {
  name: string
  background: string
}

function AddProjectDialog({ open, onClose }: AddTaskDialog) {
  const { createProject } = useProjects()

  //Colors input
  const colors = [
    { key: 'Blue', color: '#00d2ff,#3a47d5' },
    { key: 'Red', color: '#B90091,#ED6A5A' },
    { key: 'Green', color: '#48C90C,#27CC92' },
    { key: 'Violet', color: '#3F2B96,#A8C0FF' },
    { key: 'Orange', color: '#BB1900,#FFB000' },
  ]
  //Form
  const {
    register,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
  } = useForm<ProjectForm>({ defaultValues: { background: colors[0].color } })

  const onSubmit: SubmitHandler<ProjectForm> = data => {
    console.log('onSubmit project: ' + data.name + ' gradient: ' + data.background)
    console.log(data)
    const newProject: ProjectRequestype = {
      name: data.name,
      gradient: [data.background.split(',')[0], data.background.split(',')[1]],
    }
    createProject(newProject)
    onClose()
    reset()
  }

  const color = watch('background')

  //Manage modal
  const onCancel = () => {
    reset()
    onClose()
  }
  return (
    // Overlay
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-black/50' : 'invisible'}`}
      onClick={onCancel}
    >
      {/* Content */}
      <div
        className={`w-xl h-fit mx-4 flex flex-col gap-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="text-white flex flex-col gap-2">
          <div>
            <label className="block mb-1" htmlFor="name">
              Project name
            </label>
            <div className="flex justify-start items-center gap-2">
              <input
                className="w-48 h-8 text-black bg-appLight rounded-xs p-2 outline-none placeholder:text-gray-700"
                {...register('name', {
                  required: true,
                  pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                })}
                placeholder="Name"
                type="text"
                maxLength={20}
              />
              {errors.name?.type === 'required' && (
                <p role="alert" className="text-red-500">
                  Name is required
                </p>
              )}
              {errors.name?.type === 'pattern' && (
                <p role="alert" className="text-red-500">
                  Only alphanumeric characters
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <label htmlFor="color">Color</label>
            <select
              id="color"
              {...register('background')}
              onSelect={e => console.log(e)}
              className="w-48 h-8 mt-1 text-black bg-appLight rounded-xs pl-2 outline-none placeholder:text-gray-700"
            >
              {colors.map(elem => (
                <option key={elem.key} value={elem.color}>
                  {elem.key}
                </option>
              ))}
            </select>
            <div
              className="w-full mt-4 h-40 transition-colors"
              style={{ background: `linear-gradient(to bottom right, ${color}` }}
            ></div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AddProjectDialog
