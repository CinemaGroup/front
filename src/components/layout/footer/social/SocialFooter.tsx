import Container from '@/components/ui/container/Container'
import { FC } from 'react'
import styles from './SocialFooter.module.scss'
import SocialFooterMenu from './menu/SocialFooterMenu'
import { SOCIAL_FOOTER } from './menu/data/social-footer.data'
import SocialFooterMobile from './mobile/SocialFooterMobile'
import { SOCIAL_FOOTER_MOBILE } from './mobile/data/social-footer-mobile.data'

const SocialFooter: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<SocialFooterMenu menu={SOCIAL_FOOTER} />
					<SocialFooterMobile menu={SOCIAL_FOOTER_MOBILE} />
				</div>
			</Container>
		</div>
	)
}

export default SocialFooter
