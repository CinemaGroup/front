import {
	IProduct,
	IProductVariation,
} from '@/shared/interfaces/product.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IProductRight {
	similarProducts: IProduct[]
	product: IProduct
	variation: IProductVariation
	currentVariation: string
	setCurrentIndex: Dispatch<SetStateAction<string>>
}
