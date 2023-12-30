import Logo from '@/components/layout/header/logo/Logo'
import Section from '@/components/ui/section/Section'
import { FC } from 'react'
import styles from './Auth.module.scss'
import AuthForm from './form/AuthForm'
import AuthGoogleBtn from './form/google/AuthGoogleBtn'
import AuthLinks from './links/AuthLinks'
import { AUTH_LINKS } from './links/data/auth-links.data'
import AuthPreview from './preview/AuthPreview'

const Auth: FC = () => {
	return (
		<Section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<AuthPreview />
				</div>
				<div className={styles.right}>
					<Logo variant="desktop" />
					<AuthForm />
					<div className={styles.social}>
						<p className={styles.socialText}>
							Или используйте вход через соц.сети
						</p>
						<div className={styles.socialButtons}>
							<AuthGoogleBtn />
						</div>
					</div>
					<AuthLinks menu={AUTH_LINKS} />
				</div>
			</div>
		</Section>
	)
}

export default Auth
