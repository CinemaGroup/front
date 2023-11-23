'use client'

import { useOutside } from '@/hooks/custom-hooks/events/useOutside'
import cn from 'classnames'
import { FC } from 'react'
import styles from './HeaderBurger.module.scss'
import BurgerMenu from './menu/BurgerMenu'
import { burgerMenu } from './menu/data/burger-menu.data'

const HeaderBurger: FC = () => {
	const { ref, buttonRef, isShow, setIsShow } = useOutside(false)

	return (
		<>
			<button
				className={styles.button}
				ref={buttonRef}
				onClick={() => setIsShow(!isShow)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div
				className={cn(styles.burger, {
					[styles.show]: isShow,
				})}
			>
				<div className={styles.wrapper} ref={ref}>
					<BurgerMenu menu={burgerMenu} />
				</div>
			</div>
		</>
	)
}

export default HeaderBurger
