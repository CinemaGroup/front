import {
	TypeCiIconName,
	TypeMaterialIconName,
	TypePiIconName,
} from '@/shared/types/icon.type'
import { CSSProperties } from 'react'

export interface IMaterialIcon {
	name: TypeMaterialIconName
	className?: string
	style?: CSSProperties
}

export interface ICiIcon {
	name: TypeCiIconName
	className?: string
	style?: CSSProperties
}

export interface IIoIcon {
	name: TypePiIconName
	className?: string
	style?: CSSProperties
}
