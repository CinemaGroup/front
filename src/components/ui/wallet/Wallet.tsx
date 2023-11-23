'use client'

import { useAuth } from '@/hooks/queries/user/useAuth'
import Link from 'next/link'
import { FC } from 'react'
import PiIcon from '../icon/PiIcon'
import styles from './Wallet.module.scss'

const Wallet: FC = () => {
	const { user } = useAuth()

	if (!user) return null

	return (
		<div className={styles.wallet}>
			<Link className={styles.balance} href="/">
				<PiIcon name="PiPiggyBankLight" />
				<div className={styles.text}>
					Кошелок:
					<span className={styles.amount}>0 руб</span>
				</div>
			</Link>
			<Link className={styles.balance} href="/">
				<PiIcon name="PiShootingStarThin" />
				<div className={styles.text}>
					Бонусы:
					<span className={styles.amount}>0</span>
				</div>
			</Link>
		</div>
	)
}

export default Wallet
