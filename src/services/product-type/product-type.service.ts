import { axiosClassic } from '@/api/api.interceptors'
import { getProductTypesUrl } from '@/config/api.config'
import { IFilteredTypes, TypeFilters } from '@/shared/interfaces/type.interface'

export const ProductTypeService = {
	async getAll(queryData = {} as TypeFilters) {
		return axiosClassic.get<IFilteredTypes>(getProductTypesUrl(''), {
			params: queryData,
		})
	},
}
