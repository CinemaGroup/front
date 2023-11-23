import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from '../FormElements.module.scss'
import { IButton } from './interface/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles.dark]: variant === 'dark',
					[styles.light]: variant === 'light',
				},
				className && className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
