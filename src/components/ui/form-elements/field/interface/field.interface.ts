import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	label?: string
	placeholder?: string
	error?: FieldError | undefined
	className?: string
	variant?: 'auth' | 'default',
	onForgotClick?: () => void
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
