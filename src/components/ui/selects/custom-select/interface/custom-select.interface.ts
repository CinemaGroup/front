import { TypeIcon } from '@/shared/types/globals.type'

export interface ISelectItem<K = string> {
	icon?: TypeIcon
	label: string
	key: K
}

export interface ISelect<K = string> {
	data: ISelectItem<K>[]
	onChange: (item: ISelectItem<K>) => void
	value: ISelectItem<K>
	title?: string
	wrapperClassName?: string
	listClassName?: string
	buttonClassName?: string
	toggleIcon?: TypeIcon
	toggleIconClassName?: string
	itemClassName?: string
	itemActiveClassName?: string
}
