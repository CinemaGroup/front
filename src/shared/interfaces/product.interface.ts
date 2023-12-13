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
	videoPath: string
	variations: IProductVariation[]
	about: IProductAbout[]
	principles: IProductPrinciple[]
	gets: IProductGet[]
	views: number
	createdAt: string
}

export interface IProductDetails {
	product: IProduct
}
