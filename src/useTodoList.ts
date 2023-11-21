import {useMutation, useQuery} from "@tanstack/react-query";

export const useTodoList = () => {
    const getItemsQuery = useQuery({
        queryKey: ['get-items'],
        queryFn: () => {
            return ['hello', 'goodbye']
        }
    })

    const addItemsMutation = useMutation({
        mutationKey: ['add-item'],
        mutationFn: async (item: string) => {

        }
    })

    const addItem = (item: string) => {
        addItemsMutation.mutate(item);
    }

    const getItems = () => {
        return getItemsQuery.data ?? []
    }

    return {
        addItem,
        getItems,
    }
}