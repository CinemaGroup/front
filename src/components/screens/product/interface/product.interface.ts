import { IProduct } from '@/shared/interfaces/product.interface'

export interface IProductComponent {
	similarProducts: IProduct[]
	product: IProduct
}
