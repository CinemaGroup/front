import { IProductCategory } from './product-category.interface'
import { IProductGroup } from './product-group.interface'
import { IProductType } from './product-type.interface'

export interface IProductServiceItem {
	title: string
	price: number
}

export interface IProductService {
	title: string
	items: IProductServiceItem[]
}

export interface IProductVariation {
	id: number
	class: string
	sku: string
	image: string
	salePrice?: number
	price: number
	boughtTimes: number
	composition: string
	information: string
	shortDescription: string
	service?: IProductService
	reviews: string[]
	rating: number
}

export interface IProductAboutItem {
	title: string
	description: string
}

export interface IProductAbout {
	title: string
	items: IProductAboutItem[]
}

export interface IProductPrinciple {
	title: string
	description: string
	imagePath: string
}

export interface IProductGet {
	title: string
	description: string
	imagePath: string
}

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	videoPoster?: string
	videoPath?: string
	variations: IProductVariation[]
	about: IProductAbout[]
	principles: IProductPrinciple[]
	gets: IProductGet[]
	productCategory: IProductCategory
	productGroup: IProductGroup
	productType: IProductType
	views: number
	createdAt: string
}

export interface IProductDetails {
	product: IProduct
}
