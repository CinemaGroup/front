'use client'

import { useProductsFilters } from '@/hooks/custom-hooks/filters/products/useProductsFilters'
import { ICategory } from '@/shared/interfaces/category.interface'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../Categories.module.scss'

const CategoriesItem: FC<{ category: ICategory }> = ({ category }) => {
	const { queryParams, updateQueryParams } = useProductsFilters()

	return (
		<li className={styles.category}>
			<button
				className={cn(styles.button, {
					[styles.active]: queryParams.category === category.slug,
				})}
				onClick={() => updateQueryParams('category', category.slug)}
			>
				<div className={styles.icon}>
					<Image
						priority
						draggable={false}
						fill
						objectFit="cover"
						objectPosition="center"
						src={category.imagePath}
						alt={category.name}
					/>
				</div>
				<span className={styles.name}>{category.name}</span>
			</button>
		</li>
	)
}

export default CategoriesItem
