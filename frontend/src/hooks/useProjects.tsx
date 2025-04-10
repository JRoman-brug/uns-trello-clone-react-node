import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Project } from '@/types/dataTypes'
import {
  getAllProjects,
  getProject,
  getListsByProjectId,
  createProject,
  updateProject,
  deleteProject,
} from '@/services/project'

const useProjects = () => {
  const queryClient = useQueryClient()
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects,
  })

  const getProjectById = async (id: number) => {
    const { data: project } = useQuery({
      queryKey: ['projects', id],
      queryFn: () => getProject(id),
    })
    return project
  }

  const getLists = async (id: number) => {
    const { data: lists } = useQuery({
      queryKey: ['projects', id, 'lists'],
      queryFn: () => getListsByProjectId(id),
    })
    return lists
  }

  const createProjectMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const updateProjectMutation = useMutation({
    mutationFn: (project: Project) => updateProject(project.id, project),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  const deleteProjectMutation = useMutation({
    mutationFn: (id: number) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  return {
    projects,
    isLoading,
    isError,
    getProjectById,
    getLists,
    createProject: createProjectMutation.mutate,
    updateProject: updateProjectMutation.mutate,
    deleteProject: deleteProjectMutation.mutate,
  }
}

export default useProjects
