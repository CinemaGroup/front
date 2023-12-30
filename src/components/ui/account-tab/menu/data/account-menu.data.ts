import { IAccountMenu } from '../interface/account-menu.interface'

export const accountMenu: IAccountMenu = {
	items: [
		{
			icon: 'CircleUser',
			title: 'Личный кабинет',
			link: '/',
		},
		{
			icon: 'Wallet',
			title: 'Баланс',
			link: '/',
		},
		{
			icon: 'History',
			title: 'История заказов',
			link: '/serials',
		},
		{
			icon: 'HeartHandshake',
			title: 'Служба поддержки',
			link: '/faq',
		},
		{
			icon: 'Users',
			title: 'Партнёрам',
			link: '/',
		},
		// {
		// 	icon: 'LogOut',
		// 	title: 'Выйти',
		// 	link: '/',
		// },
	],
}
