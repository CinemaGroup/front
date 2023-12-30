'use client'

import { useAuth } from '@/hooks/queries/user/useAuth'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderAuth.module.scss'

const HeaderAuth: FC = () => {
	const { user } = useAuth()

	if (user) return null

	return (
		<div className={styles.auth}>
			<Link className={styles.login} href="/auth">
				Войти
			</Link>
			<Link className={styles.register} href="/auth">
				Зарегистрироваться
			</Link>
		</div>
	)
}

export default HeaderAuth
