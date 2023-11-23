import Image from 'next/image'
import { FC } from 'react'
import styles from './AccountTab.module.scss'
import { IAccountTab } from './interface/account-tab.interface'
import AccountMenu from './menu/AccountMenu'
import { accountMenu } from './menu/data/account-menu.data'

const AccountTab: FC<IAccountTab> = ({ avatarPath, login }) => {
	return (
		<div className={styles.account}>
			<div className={styles.head}>
				<div className={styles.avatar}>
					<Image
						quality={100}
						priority
						draggable={false}
						fill
						src={avatarPath}
						alt={login}
					/>
				</div>
				<span className={styles.login}>{login}</span>
			</div>
			<AccountMenu menu={accountMenu} />
		</div>
	)
}

export default AccountTab
