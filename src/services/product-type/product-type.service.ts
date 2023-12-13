import { axiosClassic, instance } from '@/api/api.interceptors'
import { getProductTypesUrl } from '@/config/api.config'
import {
	IFilteredTypes,
	IType,
	TypeFilters,
} from '@/shared/interfaces/type.interface'
import { TypeProductTypeInput } from './types/product-type.type'

export const ProductTypeService = {
	async getAll(queryData = {} as TypeFilters) {
		return axiosClassic.get<IFilteredTypes>(getProductTypesUrl(''), {
			params: queryData,
		})
	},

	async bySlug(slug: string) {
		return axiosClassic.get<IType>(getProductTypesUrl(`/by-slug/${slug}`))
	},

	// Admin Place

	async getById(id: string) {
		const result = await instance.get<TypeProductTypeInput>(
			getProductTypesUrl(`/${id}`)
		)

		return result.data
	},

	async create() {
		return instance.post<string>(getProductTypesUrl(''))
	},

	async update(id: string, dto: TypeProductTypeInput) {
		return instance.put<TypeProductTypeInput>(getProductTypesUrl(`/${id}`), dto)
	},

	async delete(id: string) {
		return instance.delete<string>(getProductTypesUrl(`/${id}`))
	},
}
