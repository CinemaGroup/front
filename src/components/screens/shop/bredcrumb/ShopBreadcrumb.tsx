'use client'

import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb'
import { useProductType } from '@/hooks/queries/product-types/useProductType'
import { FC } from 'react'
import styles from './ShopBreadcrumb.module.scss'

const ShopBreadcrumb: FC<{ slug: string }> = ({ slug }) => {
	const { type } = useProductType(slug)

	return (
		<Breadcrumb
			className={styles.breadcrumb}
			items={[
				{
					label: 'Главная',
					path: '/',
				},
				{
					label: type?.name,
					path: '',
				},
			]}
		/>
	)
}

export default ShopBreadcrumb
