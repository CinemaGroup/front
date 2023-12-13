import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'
import { IManageNavItem } from '../interface/manage-navigation.interface'

export const manageNavItems: IManageNavItem[] = [
	{
		title: 'Главная панель',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Продукты',
		link: getAdminUrl('/products'),
	},
	{
		title: 'Категории Продуктов',
		link: getAdminUrl('/product-categories'),
	},
	{
		title: 'Типы Продуктов',
		link: getAdminUrl('/product-types'),
	},
	{
		title: 'Группы Продуктов',
		link: getAdminUrl('/product-groups'),
	},
]
