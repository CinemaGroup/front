import { axiosClassic, instance } from '@/api/api.interceptors'
import { getProductGroupsUrl } from '@/config/api.config'
import { IFilteredGroups } from '@/shared/interfaces/group.interface'
import { TypeQueryFilters } from '@/shared/types/query.type'
import { TypeProductGroupInput } from './types/product-group.type'

export const ProductGroupService = {
	async getAll(queryData = {} as TypeQueryFilters) {
		return axiosClassic.get<IFilteredGroups>(getProductGroupsUrl(''), {
			params: queryData,
		})
	},

	// Admin Place

	async getById(id: string) {
		const result = await instance.get<TypeProductGroupInput>(
			getProductGroupsUrl(`/${id}`)
		)

		return result.data
	},

	async create() {
		return instance.post<string>(getProductGroupsUrl(''))
	},

	async update(id: string, dto: TypeProductGroupInput) {
		return instance.put<TypeProductGroupInput>(
			getProductGroupsUrl(`/${id}`),
			dto
		)
	},

	async delete(id: string) {
		return instance.delete<string>(getProductGroupsUrl(`/${id}`))
	},
}
