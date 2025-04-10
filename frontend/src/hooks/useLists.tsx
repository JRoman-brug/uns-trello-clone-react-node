import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllLists, createList, updateList, deleteList } from '../services/list'

const useLists = (projectId: number) => {
  const queryClient = useQueryClient()

  const {
    data: lists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['lists'],
    queryFn: () => getAllLists(projectId),
  })

  const createListMutation = useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] })
    },
  })

  const updateListMutation = useMutation({
    mutationFn: updateList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] })
    },
  })

  const deleteListMutation = useMutation({
    mutationFn: deleteList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] })
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
