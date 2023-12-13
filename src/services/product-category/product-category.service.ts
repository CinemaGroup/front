import { axiosClassic, instance } from '@/api/api.interceptors'
import { getProductCategoriesUrl } from '@/config/api.config'
import { IFilteredCategories } from '@/shared/interfaces/category.interface'
import { TypeQueryFilters } from '@/shared/types/query.type'
import { TypeProductCategoryInput } from './types/product-category.type'

export const ProductCategoryService = {
	async getAll(queryDto = {} as TypeQueryFilters) {
		return axiosClassic.get<IFilteredCategories>(getProductCategoriesUrl(''), {
			params: queryDto,
		})
	},

	async getCollections(type: string) {
		return axiosClassic.get<IFilteredCategories>(
			getProductCategoriesUrl(`/collections/${type}`)
		)
	},

	// Admin Place

	async getById(id: string) {
		const result = await instance.get<TypeProductCategoryInput>(
			getProductCategoriesUrl(`/${id}`)
		)

		return result.data
	},

	async create() {
		return instance.post<string>(getProductCategoriesUrl(''))
	},

	async update(id: string, dto: TypeProductCategoryInput) {
		return instance.put<TypeProductCategoryInput>(
			getProductCategoriesUrl(`/${id}`),
			dto
		)
	},

	async delete(id: string) {
		return instance.delete<string>(getProductCategoriesUrl(`/${id}`))
	},
}
