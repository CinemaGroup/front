import { TypeProductInput } from '@/services/product/types/product.type'
import { Control, UseFormUnregister } from 'react-hook-form'

export interface IManageProductControl {
	control: Control<TypeProductInput, any>
}

export interface IManageProductVariations extends IManageProductControl {
	unregister: UseFormUnregister<TypeProductInput>
}

export interface IManageProductServices extends IManageProductControl {
	unregister: UseFormUnregister<TypeProductInput>
	variationIndex: number
}

export interface IManageProductAboutItems extends IManageProductControl {
	aboutIndex: number
}
