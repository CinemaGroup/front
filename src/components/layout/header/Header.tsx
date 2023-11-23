import Container from '@/components/ui/container/Container'
import Wallet from '@/components/ui/wallet/Wallet'
import { FC } from 'react'
import styles from './Header.module.scss'
import HeaderAccount from './account/HeaderAccount'
import HeaderAuth from './auth/HeaderAuth'
import HeaderBurger from './burger/HeaderBurger'
import HeaderFavorites from './favorites/HeaderFavorites'
import Language from './language/Language'
import Logo from './logo/Logo'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.fill}>
					<Logo variant="desktop" className={styles.logo} />
					<Logo variant="mobile" className={styles.mobileLogo} />
					<nav className={styles.menu}>
						<HeaderAuth />
						<Wallet />
						<HeaderFavorites />
						<HeaderAccount />
						<HeaderBurger />
						<Language className={styles.language} />
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
