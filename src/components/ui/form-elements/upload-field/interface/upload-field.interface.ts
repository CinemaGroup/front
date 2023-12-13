import { FieldError } from 'react-hook-form'

export interface IUploadField {
	value?: string
	label?: string
	error?: FieldError
	className?: string
	isNoImage?: boolean
	variant?: 'poster' | 'icon' | 'thumbnail'
	onChange: (...event: any[]) => void
}
