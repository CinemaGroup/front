import {
	TypeCiIconName,
	TypeMaterialIconName,
	TypePiIconName,
} from '@/shared/types/icon.type'

export interface IAccountMenuItem {
	icon: TypeMaterialIconName | TypeCiIconName | TypePiIconName
	title: string
	link: string
}

export interface IAccountMenu {
	items: IAccountMenuItem[]
}
