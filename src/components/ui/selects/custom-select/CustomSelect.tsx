'use client'

import cn from 'classnames'
import { FC, useState } from 'react'
import { renderIcon } from '../../icon/render-icon'
import styles from './CustomSelect.module.scss'
import { ISelect } from './interface/custom-select.interface'

const CustomSelect: FC<ISelect<any>> = ({ data, onChange, value, title }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.select}>
			<button className={styles.open} onClick={() => setIsOpen(!isOpen)}>
				{title && <b>{title}: </b>}
				{value.icon && renderIcon(value.icon)}
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
								{item.icon && renderIcon(item.icon)}
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
