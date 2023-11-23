'use client'

import { renderIcon } from '@/utils/custom-utils/render-icon'
import cn from 'classnames'
import { FC, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { ISelect } from './interface/custom-select.interface'

const CustomSelect: FC<ISelect<any>> = ({ data, onChange, value, title }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.select}>
			<button className={styles.open} onClick={() => setIsOpen(!isOpen)}>
				{title && <b>{title}: </b>}
				{renderIcon(value.icon || null)}
				{value.label}
			</button>
			{isOpen && (
				<ul className={styles.list}>
					{data.map((item) => (
						<li
							key={item.key?.toString()}
							className={cn(styles.item, {
								[styles.active]: item.key === value?.key,
							})}
						>
							<button
								className={styles.button}
								onClick={() => {
									onChange(item)
									setIsOpen(false)
								}}
								disabled={item.key === value?.key}
							>
								{renderIcon(item.icon || null)}
								{item.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
