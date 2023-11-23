import localFont from 'next/font/local'

const Inter = localFont({
	src: [
		{
			path: '../assets/fonts/Inter/Regular/Inter-Regular.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/Inter/SemiBold/Inter-SemiBold.woff2',
			weight: '600',
		},
	],
	variable: '--font-inter',
})

const Qanelas = localFont({
	src: [
		{
			path: '../assets/fonts/Qanelas/Regular/Qanelas-Regular.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/Qanelas/SemiBold/Qanelas-SemiBold.woff2',
			weight: '600',
		},
	],
	variable: '--font-qanelas',
})

const RadioCanada = localFont({
	src: [
		{
			path: '../assets/fonts/RadioCanada/Regular/RadioCanada-Regular.woff2',
			weight: '400',
		},
	],
	variable: '--font-canada',
})

const RoadRadio = localFont({
	src: [
		{
			path: '../assets/fonts/RoadRadio/Bold/RoadRadio-Bold.woff2',
			weight: '700',
		},
	],
	variable: '--font-road',
})

const Roboto = localFont({
	src: [
		{
			path: '../assets/fonts/Roboto/Regular/Roboto-Regular.woff2',
			weight: '400',
		},
	],
	variable: '--font-roboto',
})

export { Inter, Qanelas, RadioCanada, RoadRadio, Roboto }
