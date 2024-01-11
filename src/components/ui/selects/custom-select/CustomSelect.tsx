'use client'

import cn from 'classnames'
import { FC, useState } from 'react'
import { renderIcon } from '../../icon/render-icon'
import styles from './CustomSelect.module.scss'
import { ISelect } from './interface/custom-select.interface'

const CustomSelect: FC<ISelect<any>> = ({
	data,
	onChange,
	value,
	title,
	wrapperClassName,
	buttonClassName,
	listClassName,
	toggleIcon,
	toggleIconClassName,
	itemClassName,
	itemActiveClassName,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cn(styles.select, wrapperClassName && wrapperClassName)}>
			<button
				className={cn(styles.open, buttonClassName && buttonClassName)}
				onClick={() => setIsOpen(!isOpen)}
			>
				{title && <b>{title}: </b>}
				{value.icon && renderIcon(value.icon)}
				{value.label}
				{toggleIcon && (
					<div
						className={cn(
							styles.toggle,
							{
								[styles.toggleActive]: isOpen,
							},
							toggleIconClassName && toggleIconClassName
						)}
					>
						{renderIcon(toggleIcon)}
					</div>
				)}
			</button>
			{isOpen && (
				<ul className={cn(styles.list, listClassName && listClassName)}>
					{data.map((item) => (
						<li
							key={item.key?.toString()}
							className={cn(
								styles.item,
								{
									[styles.active]: item.key === value?.key,
									[itemActiveClassName ? itemActiveClassName : '']:
									isOpen && itemActiveClassName,
								},
								itemClassName && itemClassName
							)}
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
