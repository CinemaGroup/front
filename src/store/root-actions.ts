import { filesFiltersSlice } from './filters/files/files-filters.slice'
import { productsFiltersSlice } from './filters/products/products-filters.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
	...userActions,
	...filesFiltersSlice.actions,
	...productsFiltersSlice.actions,
}
