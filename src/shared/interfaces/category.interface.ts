import { ICalculator } from './calculator.interface'
import { IProduct } from './product.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
	imagePath: string
	products: IProduct[]
	calculator: ICalculator
	createdAt: string
}

export interface IFilteredCategories {
	categories: ICategory[]
	length: number
}
