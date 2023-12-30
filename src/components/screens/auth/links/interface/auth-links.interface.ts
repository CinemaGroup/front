import { TypeIcon } from '@/shared/types/globals.type'

export interface IAuthLinksItem {
	icon?: TypeIcon
	label: string
	link: string
}

export interface IAuthLinksMenu {
	items: IAuthLinksItem[]
}
