import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '../types/dataTypes'
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from '../services/task'

const useTask = () => {
  const queryClient = useQueryClient()

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks,
  })

  const getTaskById = (id: number): Task | undefined => {
    const { data: task } = useQuery({
      queryKey: ['task', id],
      queryFn: () => getTask(id),
    })
    return task
  }

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  const updateTaskMutation = useMutation({
    mutationFn: async (params: { id: number; task: Task }) =>
      await updateTask(params.id, params.task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const updateTaskStatusMutation = useMutation({
    mutationFn: async (params: { id: number; isCompleted: boolean }) =>
      await updateTaskStatus(params.id, params.isCompleted),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return {
    tasks,
    isLoading,
    isError,
    getTaskById,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    updateTaskStatus: updateTaskStatusMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  }
}

export default useTask
