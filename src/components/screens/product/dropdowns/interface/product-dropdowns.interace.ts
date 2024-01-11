import {
	IProductGet,
	IProductPrinciple,
} from '@/shared/interfaces/product.interface'

export interface IProductDropdowns {
	principles: IProductPrinciple[]
	gets: IProductGet[]
}
