type TypeProductServiceItemInput = {
	title: string
	price: number
}

type TypeProductServiceInput = {
	title: string
	items: TypeProductServiceItemInput[]
}

type TypeProductVariationInput = {
	class: string
	sku: string
	image: string
	salePrice?: number
	price: number
	boughtTimes: number
	composition: string
	information: string
	shortDescription: string
	service?: TypeProductServiceInput
	rating: number
}

type TypeProductAboutItemInput = {
	title: string
	description: string
}

type TypeProductAboutInput = {
	title: string
	items: TypeProductAboutItemInput[]
}

type TypeProductPrincipleInput = {
	title: string
	description: string
	imagePath: string
}

type TypeProductGetInput = {
	title: string
	description: string
	imagePath: string
}

type TypeProductRelatedInput = {
	id: number
}

export type TypeProductInput = {
	name: string
	description: string
	videoPoster?: string
	videoPath?: string
	variations: TypeProductVariationInput[]
	about: TypeProductAboutInput[]
	principles: TypeProductPrincipleInput[]
	gets: TypeProductGetInput[]
	relatedIds?: TypeProductRelatedInput[]
	productCategoryId: number
	productTypeId: number
	productGroupId: number
}
