'use client'

import Categories from '@/components/templates/categories/Categories'
import { useProductCategories } from '@/hooks/queries/categories/useProductCategories'

import { FC } from 'react'
import { IProductCategories } from './interface/product-categories.interface'

const ProductCategories: FC<IProductCategories> = ({ className, slug }) => {
	const { categories } = useProductCategories(slug)

	return (
		<Categories
			categories={categories || []}
			className={className && className}
		/>
	)
}

export default ProductCategories
