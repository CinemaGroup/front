'use client'

import googleIcon from '@/assets/images/icons/google.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from '../../Auth.module.scss'

const AuthGoogleBtn: FC = () => {
	const { push } = useRouter()

	return (
		<button
			className={styles.google}
			onClick={() =>
				push(
					`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&scope=email%20profile&client_id=${process.env.GOOGLE_CLIENT_ID}&flowName=GeneralOAuthFlow`
				)
			}
		>
			<Image
				priority
				draggable={false}
				width={24}
				height={24}
				src={googleIcon}
				alt="Google"
			/>
		</button>
	)
}

export default AuthGoogleBtn
