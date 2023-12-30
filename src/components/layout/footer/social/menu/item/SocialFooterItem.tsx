import { renderIcon } from '@/components/ui/icon/render-icon'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../../SocialFooter.module.scss'
import { ISocialFooterItem } from '../../interface/social-footer.interface'

const SocialFooterItem: FC<{ item: ISocialFooterItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
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

export default SocialFooterItem
