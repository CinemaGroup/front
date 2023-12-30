import { renderIcon } from '@/components/ui/icon/render-icon'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../AuthLinks.module.scss'
import { IAuthLinksItem } from '../interface/auth-links.interface'

const AuthLink: FC<{ item: IAuthLinksItem }> = ({ item }) => {
	return (
		<li className={styles.link}>
			<Link className={styles.link} href={item.link}>
				{item.icon ? (
					renderIcon(item.icon)
				) : (
					<span className={styles.label}>{item.label}</span>
				)}
			</Link>
		</li>
	)
}

export default AuthLink
