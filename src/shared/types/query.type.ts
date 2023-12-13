export enum EnumQuerySort {
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export type TypeQueryFilters = {
	page?: string | number
	perPage: string | number
	sort?: EnumQuerySort
	searchTerm?: string
}