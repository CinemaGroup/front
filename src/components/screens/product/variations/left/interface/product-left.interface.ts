import { IProductVariation } from '@/shared/interfaces/product.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IProductLeft {
	variation: IProductVariation
	productTypeName: string
	name: string
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}
