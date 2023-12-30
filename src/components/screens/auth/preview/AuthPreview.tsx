import preview from '@/assets/images/backgrounds/auth-bg.webp'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../Auth.module.scss'

const AuthPreview: FC = () => {
	return (
		<div className={styles.preview}>
			<Image
				quality={100}
				draggable={false}
				priority
				fill
				src={preview}
				sizes="100vw"
				alt={`${SITE_NAME} Авторизация`}
			/>
		</div>
	)
}

export default AuthPreview
