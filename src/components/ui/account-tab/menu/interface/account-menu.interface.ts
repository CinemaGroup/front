import { TypeLucideIcon } from '@/shared/types/icon.type'

export interface IAccountMenuItem {
	icon: TypeLucideIcon
	title: string
	link: string
}

export interface IAccountMenu {
	items: IAccountMenuItem[]
}
