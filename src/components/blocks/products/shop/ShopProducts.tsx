'use client'

import CatalogProducts from '@/components/templates/products/catalog/CatalogProducts'
import { useProductsFilters } from '@/hooks/custom-hooks/filters/products/useProductsFilters'
import { useProductCollections } from '@/hooks/queries/products/useProductCollections'
import { FC } from 'react'
import { IShopProducts } from './inteface/shop-products.interface'

const ShopProducts: FC<IShopProducts> = ({ className, type }) => {
	const { queryParams, isFilterUpdated } = useProductsFilters()

	const { groups } = useProductCollections(queryParams, isFilterUpdated, type)

	return (
		<CatalogProducts groups={groups || []} className={className && className} />
	)
}

export default ShopProducts
