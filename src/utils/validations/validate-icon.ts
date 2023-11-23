import { IImage } from '@/shared/interfaces/globals.interface'
import * as CiIcons from 'react-icons/ci'
import * as MaterialIcons from 'react-icons/md'
import * as PiIcons from 'react-icons/pi'

export const validateIcon = () => {
	const isMaterialIcon = (icon: any): icon is keyof typeof MaterialIcons => {
		return icon in MaterialIcons
	}

	const isCiIcon = (icon: any): icon is keyof typeof CiIcons => {
		return icon in CiIcons
	}

	const isPiIcon = (icon: any): icon is keyof typeof PiIcons => {
		return icon in PiIcons
	}

	const isImage = (obj: any): obj is IImage => {
		return 'link' in obj && 'width' in obj && 'height' in obj && 'alt' in obj
	}

	return { isMaterialIcon, isCiIcon, isPiIcon, isImage }
}
