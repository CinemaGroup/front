import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'360': {'max': '360px'},
			'400': {'max': '400px'},
			'450': {'max': '450px'},
			'500': {'max': '500px'},
			'550': {'max': '550px'},
			'600': {'max': '600px'},
			'700': {'max': '700px'},
			'800': {'max': '800px'},
			'850': {'max': '850px'},
			'1000': {'max': '1000px'},
			'1050': {'max': '1050px'},  
			'1100': {'max': '1100px'},
			'1150': {'max': '1150px'},
			'1200': {'max': '1200px'},
			'1360': {'max': '1360px'},
			'1500': {'max': '1500px'},
			'1600': {'max': '1600px'},
			'1750': {'max': '1750px'},
    },
		fontFamily: {
			Inter: ['var(--font-inter)'],
			Qanelas: ['var(--font-qanelas)'],
			RadioCanada: ['var(--font-canada'],
			RoadRadio: ['var(--font-road)'],
			Roboto: ['var(--font-roboto)'],
		},
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			yellow: {
				500: '#f4b800',
			},
			gray: {
				950: '#1E1E1E',
				900: '#181818',
				800: '#252525',
				700: '#313131',
				600: '#565656',
				500: '#949393',
				400: '#B8B8B8',
				300: '#C9C9C9',
				200: '#e9e9e9',
			},
			red: {
				300: '#FF1616',
			},
		},
		extend: {
			fontSize: {
				'extra-small': '14px',
				small: '16px',
				base: '18px',
				medium: '20px',
				lg: '22px',
				'2lg': '24px',
				'3lg': '26px',
				'4lg': '28px',
				'5lg': '30px',
				'6lg': '32px',
				'7lg': '34px',
				'8lg': '36px',
				'9lg': '38px',
				'10lg': '40px',
				title: '55px',
			},
			borderRadius: {
				'extra-small': '5px',
				small: '10px',
				medium: '15px',
				big: '20px',
				extra: '25px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			keyframes: {
				hide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				hide: 'hide .5s ease-in-out',
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(
			({
				addUtilities,
				addComponents,
				theme,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({
					'.btn-light': {
						fontFamily: theme('fontFamily.RoadRadio'),
						fontSize: '19px',
						lineHeight: '21px',
						color: theme('colors.gray.900'),
						padding: '15px 20px',
						background: theme('colors.gray.200'),
						borderRadius: theme('borderRadius.medium'),
						transition: 'background 0.3s, color 0.3s',
					},

					'.btn-dark': {
						fontFamily: theme('fontFamily.RoadRadio'),
						fontSize: '19px',
						lineHeight: '21px',
						color: theme('colors.white'),
						padding: '15px 20px',
						background: theme('colors.gray.700'),
						borderRadius: theme('borderRadius.medium'),
						transition: 'background 0.3s, color 0.3s',
					},

					'.title': {
						fontFamily: theme('fontFamily.RoadRadio'),
						fontSize: theme('fontSize.title'),
						color: theme('colors.white'),
					},

					'.subtitle': {
						fontSize: theme('fontSize.5lg'),
					},

					'.text-link': {
						textUnderlineOffset: 4,
						textDecorationLine: 'underline',
						textDecorationColor: theme('colors.gray.300'),
					},
				})

				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
			}
		),
	],
}
export default config
