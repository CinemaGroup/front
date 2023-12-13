import { TypeFileFilters } from '@/shared/types/file.type'
import { ProductDataFilters } from '@/shared/types/product.type'

export interface IProductsFiltersState {
	isFilterUpdated: boolean
	queryParams: ProductDataFilters
}

export interface IProductsFiltersActionsPayload {
	key: keyof ProductDataFilters
	value: string
}

export interface IFilesFiltersState {
	isFilterUpdated: boolean
	queryParams: TypeFileFilters
}

export interface IFilesFiltersActionsPayload {
	key: keyof TypeFileFilters
	value: string
}
