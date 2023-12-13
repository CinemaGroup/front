import { UserService } from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useToggleFavorite = (productId: number) => {
	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		},
	})

	return { toggleFavorite: mutateAsync }
}
