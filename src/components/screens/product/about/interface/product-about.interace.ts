import { IProductCategory } from '@/shared/interfaces/product-category.interface'
import { IProductAbout } from '@/shared/interfaces/product.interface'

export interface IProductAboutProps {
	about: IProductAbout
	productCategory: IProductCategory
}
