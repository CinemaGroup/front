import { StaticImageData } from 'next/image'

export interface IImage {
	quality?: number
	fill?: boolean
	sizes?: string
	link: StaticImageData | string
	width: number
	height: number
	alt: string
}
