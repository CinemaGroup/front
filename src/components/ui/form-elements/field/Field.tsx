import cn from 'classnames'
import { forwardRef } from 'react'
import styles from '../FormElements.module.scss'
import { IField } from './interface/field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			variant = 'default',
			onForgotClick,
			label,
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
				{variant === 'auth' && onForgotClick ? (
					<div className={styles.authField}>
						<input
							className={styles.input}
							ref={ref}
							type={type}
							{...rest}
							placeholder={placeholder}
						/>
						<button className={styles.forgot} onClick={onForgotClick}>
							Забыли пароль?
						</button>
					</div>
				) : (
					<input
						className={styles.input}
						ref={ref}
						type={type}
						{...rest}
						placeholder={placeholder}
					/>
				)}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
