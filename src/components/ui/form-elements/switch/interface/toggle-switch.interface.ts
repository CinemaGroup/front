import { FieldError } from 'react-hook-form'

export interface IToggleSwitch {
	className?: string
	value: any
	onChange: (...event: any[]) => void
	error?: FieldError | undefined
}
