import { FC } from 'react'
import { ISocialFooterMenu } from '../interface/social-footer.interface'
import styles from './SocialFooterMobile.module.scss'
import SocialFooterMobileItem from './item/SocialFooterMobileItem'

const SocialFooterMobile: FC<{ menu: ISocialFooterMenu }> = ({
	menu: { items },
}) => {
	return (
		<ul className={styles.menu}>
			{items.map((item, index) => (
				<SocialFooterMobileItem key={index} item={item} />
			))}
		</ul>
	)
}

export default SocialFooterMobile
