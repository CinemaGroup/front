import type { Metadata } from 'next'

import ManageProducts from '@/components/screens/manage/pages/products/ManageProducts'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Manage Products Page',
	...NO_INDEX_PAGE,
}

export default function ManageProductsPage() {
	return <ManageProducts />
}
