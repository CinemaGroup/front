import cn from 'classnames'
import { forwardRef } from 'react'
import styles from '../FormElements.module.scss'
import { IField } from './interface/field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			label,
			errorPosition = 'bottom',
			className,
			placeholder,
			error,
			type = 'text',
			style,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn(styles.field, className && className)}>
				{label && <label className={styles.label}>{label}</label>}
				{error && <p className={styles.error}>{error.message}</p>}
				<input
					className={styles.input}
					ref={ref}
					type={type}
					{...rest}
					placeholder={placeholder}
				/>
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
