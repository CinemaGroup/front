'use client'

import cn from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './Loader.module.scss'
import { ILoader } from './interface/loader.interface'

const Loader: FC<PropsWithChildren<ILoader>> = ({ className }) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!modalRef.current) return null

	return ReactDOM.createPortal(
		<div className={cn(styles.overlay, className && className)}>
			<div className={styles.box}>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
			</div>
		</div>,
		modalRef.current
	)
}

export default Loader
