'use client'

import AccountTab from '@/components/ui/account-tab/AccountTab'
import { useOutside } from '@/hooks/custom-hooks/events/useOutside'
import { useProfile } from '@/hooks/queries/user/useProfile'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './HeaderAccount.module.scss'

const HeaderAccount: FC = () => {
	const { profile } = useProfile()
	const { ref, buttonRef, isShow, setIsShow } = useOutside(false)

	if (!profile) return null

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				ref={buttonRef}
				onClick={() => setIsShow(!isShow)}
			>
				<Image
					quality={100}
					priority
					draggable={false}
					fill
					src={profile.avatarPath}
					alt={profile.login}
				/>
			</button>
			<div
				className={cn(styles.bar, {
					[styles.show]: isShow,
				})}
				ref={ref}
			>
				<AccountTab avatarPath={profile.avatarPath} login={profile.login} />
			</div>
		</div>
	)
}

export default HeaderAccount
