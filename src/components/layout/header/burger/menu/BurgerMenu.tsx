import Search from '@/components/ui/search/Search'
import { FC } from 'react'
import Language from '../../language/Language'
import styles from './BurgerMenu.module.scss'
import { IBurgerMenu } from './interface/burger-menu.interface'
import BurgerMenuItem from './item/BurgerMenuItem'

const BurgerMenu: FC<{ menu: IBurgerMenu }> = ({ menu: { items } }) => {
	return (
		<>
			<Language className={styles.language} />
			<Search className={styles.search} placeholder="Введите площадку" />
			<nav className={styles.nav}>
				<ul className={styles.menu}>
					{items.map((item, index) => (
						<BurgerMenuItem key={index} item={item} />
					))}
				</ul>
			</nav>
		</>
	)
}

export default BurgerMenu
