import useProjects from '../../hooks/useProjects'
import { ProjectRequestype } from '../../types/dataTypes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
interface AddTaskDialog {
  isOpen: boolean
  onClose: () => void
}

type ProjectForm = {
  name: string
  background: string
}

function AddProjectDialog({ isOpen, onClose }: AddTaskDialog) {
  const { createProject } = useProjects()

  const colors = [
    { key: 'Blue', color: '#00d2ff,#3a47d5' },
    { key: 'Red', color: '#B90091,#ED6A5A' },
    { key: 'Green', color: '#48C90C,#27CC92' },
    { key: 'Violet', color: '#3F2B96,#A8C0FF' },
    { key: 'Orange', color: '#BB1900,#FFB000' },
  ]
  const {
    register,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
  } = useForm<ProjectForm>({ defaultValues: { background: colors[0].color } })

  const onSubmit: SubmitHandler<ProjectForm> = data => {
    const newProject: ProjectRequestype = {
      name: data.name,
      gradient: [data.background.split(',')[0], data.background.split(',')[1]],
    }
    createProject(newProject)
    toast.success('Project created successfully', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    onClose()
    reset()
  }

  const color = watch('background')

  const onCancel = () => {
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-appLight justify-center items-center w-full"
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
            <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 p-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Project name</label>
                <input
                  className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
                  {...register('name', {
                    required: true,
                    pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                  })}
                  placeholder="Name"
                  type="text"
                  maxLength={20}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="color">Color</label>
                <select
                  id="color"
                  {...register('background')}
                  onSelect={e => console.log(e)}
                  className="text-black bg-appLight rounded-xs px-2 py-1 outline-none placeholder:text-gray-700"
                >
                  {colors.map((elem, index) => (
                    <option key={index} value={elem.color}>
                      {elem.key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-32 p-2">
              <div
                className="w-full h-full transition-colors rounded-sm"
                style={{ background: `linear-gradient(to bottom right, ${color}` }}
              ></div>
            </div>
          </div>
          <input
            type="submit"
            className="cursor-pointer w-1/3 p-1 rounded-sm bg-appSecondary hover:bg-appSecondary/75 hover:scale-102 hover:text-white transition-all duration-200"
          />
        </form>
      </div>
    </div>
  )
}

export default AddProjectDialog
