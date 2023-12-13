import { EnumProductSort } from '@/shared/types/product.type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	IProductsFiltersActionsPayload,
	IProductsFiltersState,
} from '../interface/filters.interface'

const initialState: IProductsFiltersState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: -1,
	},
}

export const productsFiltersSlice = createSlice({
	name: 'products-filters',
	initialState,
	reducers: {
		updateProductsQueryParam: (
			state,
			action: PayloadAction<IProductsFiltersActionsPayload>
		) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetProductsFilterUpdate: (state) => {
			state.isFilterUpdated = false
		},
	},
})
