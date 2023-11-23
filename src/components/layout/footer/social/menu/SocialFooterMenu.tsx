import { FC } from 'react'
import styles from '../SocialFooter.module.scss'
import { ISocialFooterMenu } from '../interface/social-footer.interface'
import SocialFooterItem from './item/SocialFooterItem'

const SocialFooterMenu: FC<{ menu: ISocialFooterMenu }> = ({
	menu: { items },
}) => {
	return (
		<ul className={styles.menu}>
			{items.map((item, index) => (
				<SocialFooterItem key={index} item={item} />
			))}
		</ul>
	)
}

export default SocialFooterMenu
