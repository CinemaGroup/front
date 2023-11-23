import * as CiIcons from 'react-icons/ci'
import * as MaterialIcons from 'react-icons/md'
import * as PiIcons from 'react-icons/pi'
import { IImage } from '../interfaces/globals.interface'

export type TypeIcon =
	| keyof typeof MaterialIcons
	| keyof typeof CiIcons
	| keyof typeof PiIcons
	| IImage
