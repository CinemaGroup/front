import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { ISubHeading } from './interface/sub-heading.interface'
import styles from './SubHeading.module.scss'

const SubHeading: FC<PropsWithChildren<ISubHeading>> = ({
	children,
	className,
}) => {
	return (
		<h2 className={cn(styles.heading, className && className)}>{children}</h2>
	)
}

export default SubHeading
