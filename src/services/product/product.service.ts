import { axiosClassic, instance } from '@/api/api.interceptors'
import { getProductsUrl } from '@/config/api.config'
import { IProduct } from '@/shared/interfaces/product.interface'
import {
	ProductDataFilters,
	TypeCollectionProducts,
	TypePaginationProducts,
} from '@/shared/types/product.type'
import { TypeProductInput } from './types/product.type'

export const ProductService = {
	async getAll(queryData = {} as ProductDataFilters) {
		return axiosClassic.get<TypePaginationProducts>(getProductsUrl(''), {
			params: queryData,
		})
	},

	async getCollection(queryData = {} as ProductDataFilters) {
		return axiosClassic.get<TypeCollectionProducts>(
			getProductsUrl('/collections'),
			{
				params: queryData,
			}
		)
	},

	async getBySlug(slug: string) {
		const result = await axiosClassic.get<IProduct>(
			getProductsUrl(`/by-slug/${slug}`)
		)

		return result.data
	},

	async getSimilar(slug: string) {
		const result = await axiosClassic.get<IProduct[]>(
			getProductsUrl(`/similar/${slug}`)
		)

		return result.data
	},

	// Admin Place
	async getById(id: string) {
		const result = await instance.get<TypeProductInput>(
			getProductsUrl(`/${id}`)
		)

		return result.data
	},

	async create() {
		return instance.post<string>(getProductsUrl(''))
	},

	async update(id: string, dto: TypeProductInput) {
		return instance.put<TypeProductInput>(getProductsUrl(`/${id}`), dto)
	},

	async delete(id: string) {
		return instance.delete<string>(getProductsUrl(`/${id}`))
	},
}
