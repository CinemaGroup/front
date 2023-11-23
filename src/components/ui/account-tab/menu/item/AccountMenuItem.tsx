import CiIcon from '@/components/ui/icon/CiIcon'
import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import PiIcon from '@/components/ui/icon/PiIcon'
import { validateIcon } from '@/utils/validations/validate-icon'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../../AccountTab.module.scss'
import { IAccountMenuItem } from '../interface/account-menu.interface'

const AccountMenuItem: FC<{ item: IAccountMenuItem }> = ({ item }) => {
	const { isMaterialIcon, isCiIcon, isPiIcon } = validateIcon()

	return (
		<li className={styles.item}>
			<Link className={styles.link} href={item.link}>
				{isMaterialIcon(item.icon) ? (
					<MaterialIcon name={item.icon} />
				) : isCiIcon(item.icon) ? (
					<CiIcon name={item.icon} />
				) : isPiIcon(item.icon) ? (
					<PiIcon name={item.icon} />
				) : null}
				{item.title}
			</Link>
		</li>
	)
}

export default AccountMenuItem
