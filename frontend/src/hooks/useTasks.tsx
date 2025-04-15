import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllTasks, createTask, updateTask, updateTaskStatus, deleteTask } from '../services/task'

const useTasks = (listId: number | undefined) => {
  const queryClient = useQueryClient()

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tasks', listId],
    queryFn: () => getAllTasks(listId),
    enabled: !!listId,
  })

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', listId] })
    },
  })

  const updateTaskStatusMutation = useMutation({
    mutationFn: updateTaskStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', listId] })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', listId] })
    },
  })

  return {
    tasks,
    isLoading,
    isError,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    updateTaskStatus: updateTaskStatusMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  }
}

export default useTasks
