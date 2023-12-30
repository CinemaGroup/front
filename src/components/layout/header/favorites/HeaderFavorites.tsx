'use client'

import Icon from '@/components/ui/icon/Icon'
import { useAuth } from '@/hooks/queries/user/useAuth'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderFavorites.module.scss'

const HeaderFavorites: FC = () => {
	const { user } = useAuth()

	if (!user) return null

	return (
		<Link href="/favorites" className={styles.favorites}>
			<Icon name="Heart" />
			<span className={styles.count}>0</span>
		</Link>
	)
}

export default HeaderFavorites
