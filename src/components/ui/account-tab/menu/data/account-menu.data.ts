import { IAccountMenu } from '../interface/account-menu.interface'

export const accountMenu: IAccountMenu = {
	items: [
		{
			icon: 'MdHome',
			title: 'Личный кабинет',
			link: '/',
		},
		{
			icon: 'MdLocalFireDepartment',
			title: 'Баланс',
			link: '/',
		},
		{
			icon: 'MdExplore',
			title: 'История заказов',
			link: '/serials',
		},
		{
			icon: 'MdHelp',
			title: 'Служба поддержки',
			link: '/faq',
		},
		{
			icon: 'MdHelp',
			title: 'Партнёрам',
			link: '/',
		},
		{
			icon: 'MdHelp',
			title: 'Выйти',
			link: '/',
		},
	],
}
