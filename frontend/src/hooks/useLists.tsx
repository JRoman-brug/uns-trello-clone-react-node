import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllLists, createList, updateList, deleteList } from '../services/list'

const useLists = (projectId: string | undefined) => {
  const queryClient = useQueryClient()

  const {
    data: lists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['lists', projectId],
    queryFn: () => getAllLists(projectId),
    enabled: !!projectId,
  })

  const createListMutation = useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists', projectId] })
      queryClient.refetchQueries({ queryKey: ['lists', projectId] })
    },
  })

  const updateListMutation = useMutation({
    mutationFn: updateList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists', projectId] })
      queryClient.refetchQueries({ queryKey: ['lists', projectId] })
    },
  })

  const deleteListMutation = useMutation({
    mutationFn: deleteList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists', projectId] })
      queryClient.refetchQueries({ queryKey: ['lists', projectId] })
    },
  })

  return {
    lists,
    isLoading,
    isError,
    createList: createListMutation.mutate,
    updateList: updateListMutation.mutate,
    deleteList: deleteListMutation.mutate,
  }
}

export default useLists
