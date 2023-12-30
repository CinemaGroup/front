import Icon from '@/components/ui/icon/Icon'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../../AccountTab.module.scss'
import { IAccountMenuItem } from '../interface/account-menu.interface'

const AccountMenuItem: FC<{ item: IAccountMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={item.link}>
				<Icon name={item.icon} />
				{item.title}
			</Link>
		</li>
	)
}

export default AccountMenuItem
