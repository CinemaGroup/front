import {
	IProduct,
	IProductVariation,
} from '@/shared/interfaces/product.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IProductVariations {
	similarProducts: IProduct[]
	product: IProduct
	variation: IProductVariation
	currentVariation: string
	setCurrentIndex: Dispatch<SetStateAction<string>>
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}
