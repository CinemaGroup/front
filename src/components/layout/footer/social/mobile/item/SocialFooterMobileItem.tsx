import { renderIcon } from '@/components/ui/icon/render-icon'
import Link from 'next/link'
import { FC } from 'react'
import { ISocialFooterItem } from '../../interface/social-footer.interface'
import styles from '../SocialFooterMobile.module.scss'

const SocialFooterMobileItem: FC<{ item: ISocialFooterItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={item.link}>
				{item.icon && renderIcon(item.icon)}
				<span className={styles.label}>{item.label}</span>
			</Link>
		</li>
	)
}

export default SocialFooterMobileItem
