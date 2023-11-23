export interface IType {
	id: number
	name: string
	slug: string
	description: string
	color: string
	createdAt: string
}

export enum EnumTypeSort {
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export type TypeFilters = {
	sort?: EnumTypeSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
}

export interface IFilteredTypes {
	types: IType[]
	length: number
}
