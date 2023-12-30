import telegramIcon from '@/assets/images/icons/telegram.svg'
import whatsappIcon from '@/assets/images/icons/whatsapp.svg'
import { IAuthLinksMenu } from '../interface/auth-links.interface'

export const AUTH_LINKS: IAuthLinksMenu = {
	items: [
		{
			icon: {
				link: telegramIcon,
				width: 24,
				height: 24,
				alt: 'Telegram',
			},
			label: '',
			link: '/',
		},
		{
			icon: {
				link: whatsappIcon,
				width: 24,
				height: 24,
				alt: 'Whatsapp',
			},
			label: '',
			link: '/',
		},
		{
			icon: 'PhoneCall',
			label: '',
			link: '/',
		},
		{
			icon: 'Mail',
			label: '',
			link: '/',
		},
	],
}
