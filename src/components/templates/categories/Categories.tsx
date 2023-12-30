import Icon from '@/components/ui/icon/Icon'
import cn from 'classnames'
import { FC, useState } from 'react'
import styles from './Categories.module.scss'
import { ICategories } from './interface/categories.interface'
import CategoriesItem from './item/CategoriesItem'

const Categories: FC<ICategories> = ({ categories, className }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cn(styles.wrapper, className && className)}>
			<ul
				className={cn(styles.categories, {
					[styles.active]: isOpen,
				})}
			>
				{categories.map((category) => (
					<CategoriesItem key={category.id} category={category} />
				))}
			</ul>
			<button
				className={cn(styles.open, {
					[styles.active]: isOpen,
				})}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Icon name="ChevronDown" />
			</button>
		</div>
	)
}

export default Categories
