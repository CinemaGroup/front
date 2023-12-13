import { instance } from '@/api/api.interceptors'
import { getUsersUrl } from '@/config/api.config'
import { IFullUser } from '@/shared/interfaces/user.interface'

export const UserService = {
	async getProfile() {
		return instance.get<IFullUser>(getUsersUrl('/profile'))
	},

	async toggleFavorite(productId: string | number) {
		return instance.patch<IFullUser>(getUsersUrl(`/profile/favorites/${productId}`))
	},
}
