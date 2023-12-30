import { FC } from 'react'
import styles from './AuthLinks.module.scss'
import { IAuthLinksMenu } from './interface/auth-links.interface'
import AuthLink from './item/AuthLink'

const AuthLinks: FC<{ menu: IAuthLinksMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.links}>
			{items.map((item, index) => (
				<AuthLink key={index} item={item} />
			))}
		</ul>
	)
}

export default AuthLinks
