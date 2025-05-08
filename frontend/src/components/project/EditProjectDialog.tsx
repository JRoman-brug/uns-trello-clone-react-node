import useProjects from '../../hooks/useProjects'
import { ProjectType } from '../../types/dataTypes'
import { SubmitHandler, useForm } from 'react-hook-form'
interface AddTaskDialog {
  isOpen: boolean
  onClose: () => void
  projectId: string
}

type ProjectForm = {
  name: string
  background: string
}

function EditProjectDialog({ isOpen, onClose, projectId }: AddTaskDialog) {
  const { projects, updateProject } = useProjects()
  const project = projects?.find(project => project.id === projectId)

  if (!project) return

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
  } = useForm<ProjectForm>({
    defaultValues: {
      name: project.name,
      background: `${project.gradient[0]},${project.gradient[1]}`,
    },
  })

  const onSubmit: SubmitHandler<ProjectForm> = data => {
    const newProject: ProjectType = {
      ...project,
      name: data.name,
      gradient: [data.background.split(',')[0], data.background.split(',')[1]],
    }
    updateProject({ id: projectId, project: newProject })
    onClose()
    reset()
  }

  const color = watch('background')

  const onCancel = (e: React.MouseEvent) => {
    e.stopPropagation()
    reset()
    onClose()
  }
  return (
    <div
      className={`fixed inset-0 m-0 w-screen h-screen z-1000 flex justify-center items-center transition-colors ${isOpen ? 'visible bg-[#0008]' : 'invisible'} `}
      onClick={onCancel}
    >
      <div
        className={`w-xl h-fit bg-background-dark-accent z-150 rounded-sm shadow px-6 py-4 transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-appLight justify-center items-center"
        >
          <div className="w-full h-4">
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
          <div className="flex justify-around w-full">
            <div className="flex flex-col gap-4 justify-center w-1/2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Project Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  maxLength={20}
                  className="w-48 h-8 text-black bg-appLight rounded-xs p-2 outline-none placeholder:text-gray-700"
                  {...register('name', {
                    required: true,
                    pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
                  })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="color">Color</label>
                <select
                  id="color"
                  {...register('background')}
                  className="w-48 h-8 text-black bg-appLight rounded-xs pl-2 outline-none placeholder:text-gray-700"
                >
                  {colors.map((elem, index) => {
                    const selected = elem.color === `${project.gradient[0]},${project.gradient[1]}`
                    return (
                      <option key={index} value={elem.color} selected={selected}>
                        {elem.key}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div
              className="w-1/2 transition-colors rounded-sm"
              style={{ background: `linear-gradient(to bottom right, ${color}` }}
            ></div>
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

export default EditProjectDialog
