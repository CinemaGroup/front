import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Breadcrumb.module.scss'
import { IBreadcrumb } from './interface/breadcrumb.interface'

const Breadcrumb: FC<IBreadcrumb> = ({ items, className }) => {
	return (
		<div className={cn(styles.wrapper, className && className)}>
			{items.map((crumb, i) => {
				const isLastItem = i === items.length - 1
				if (!isLastItem) {
					return (
						<Link href={crumb.path} key={i} className={styles.item}>
							{crumb.label}
						</Link>
					)
				} else {
					return (
						<span className={cn(styles.item, styles.last)}>{crumb.label}</span>
					)
				}
			})}
		</div>
	)
}

export default Breadcrumb
