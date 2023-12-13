import { IColor } from 'react-color-palette'
import { FieldError } from 'react-hook-form'

export interface IColorPicker {
	label?: string
	error?: FieldError | undefined
	className?: string
	onChange: (color: IColor) => void
}
