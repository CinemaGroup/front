import Link from 'next/link'
import { FC } from 'react'
import styles from '../BurgerMenu.module.scss'
import { IBurgerMenuItem } from '../interface/burger-menu.interface'

const BurgerMenuItem: FC<{ item: IBurgerMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link href={item.link} className={styles.link}>
				{item.title}
			</Link>
		</li>
	)
}

export default BurgerMenuItem
