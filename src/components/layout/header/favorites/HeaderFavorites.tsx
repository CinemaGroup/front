'use client'

import PiIcon from '@/components/ui/icon/PiIcon'
import { useAuth } from '@/hooks/queries/user/useAuth'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderFavorites.module.scss'

const HeaderFavorites: FC = () => {
	const { user } = useAuth()

	if (!user) return null

	return (
		<Link href="/favorites" className={styles.favorites}>
			<PiIcon name="PiHeartThin" />
			<span className={styles.count}>0</span>
		</Link>
	)
}

export default HeaderFavorites
