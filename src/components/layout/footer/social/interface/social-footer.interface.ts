import { TypeIcon } from '@/shared/types/globals.type'

export interface ISocialFooterItem {
	icon?: TypeIcon
	label: string
	link: string
}

export interface ISocialFooterMenu {
	items: ISocialFooterItem[]
}
