import { FC } from 'react'
import styles from '../AccountTab.module.scss'
import { IAccountMenu } from './interface/account-menu.interface'
import AccountMenuItem from './item/AccountMenuItem'

const AccountMenu: FC<{ menu: IAccountMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.menu}>
			{items.map((item, index) => (
				<AccountMenuItem key={index} item={item} />
			))}
		</ul>
	)
}

export default AccountMenu
