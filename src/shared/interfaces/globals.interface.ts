import { StaticImageData } from 'next/image'

export interface IImage {
	link: StaticImageData | string
	width: number
	height: number
	alt: string
}
