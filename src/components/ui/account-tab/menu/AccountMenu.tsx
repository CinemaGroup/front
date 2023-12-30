import { useActions } from '@/hooks/queries/user/useActions'
import { FC } from 'react'
import Icon from '../../icon/Icon'
import styles from '../AccountTab.module.scss'
import { IAccountMenu } from './interface/account-menu.interface'
import AccountMenuItem from './item/AccountMenuItem'

const AccountMenu: FC<{ menu: IAccountMenu }> = ({ menu: { items } }) => {
	const { logout } = useActions()

	return (
		<ul className={styles.menu}>
			{items.map((item, index) => (
				<AccountMenuItem key={index} item={item} />
			))}
			<li className={styles.item}>
				<button className={styles.link} onClick={() => logout()}>
					<Icon name="LogOut" />
					Выйти
				</button>
			</li>
		</ul>
	)
}

export default AccountMenu
