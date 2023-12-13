import { IProduct } from '../interfaces/product.interface'

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}

export interface ICollectionGroup {
	name: string
	description: string
	products: IProduct[]
}

export type TypeCollectionProducts = {
	length: number
	groups: ICollectionGroup[]
}

export type ProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	type?: string
	category?: string
}

export enum EnumProductSort {
	POPULAR = 'popular',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}
