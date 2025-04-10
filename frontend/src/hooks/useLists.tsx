import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { List } from '../types/dataTypes'
import {
  getAllLists,
  getList,
  getTasksByListId,
  createList,
  updateList,
  deleteList,
} from '../services/list'

const useLists = () => {
  const queryClient = useQueryClient()

  const {
    data: lists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['lists'],
    queryFn: getAllLists,
  })

  const getListById = async (id: number) => {
    const { data: list } = useQuery({
      queryKey: ['lists', id],
      queryFn: () => getList(id),
    })
    return list
  }

  const getTasks = async (id: number) => {
    const { data: tasks } = useQuery({
      queryKey: ['lists', id, 'tasks'],
      queryFn: () => getTasksByListId(id),
    })
    return tasks
  }

  const createListMutation = useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] })
    },
  })

  const updateListMutation = useMutation({
    mutationFn: async (params: { id: number; list: List }) => updateList(params.id, params.list),
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
    getListById,
    getTasks,
    createList: createListMutation.mutate,
    updateList: updateListMutation.mutate,
    deleteList: deleteListMutation.mutate,
  }
}

export default useLists
