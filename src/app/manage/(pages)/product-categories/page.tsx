import type { Metadata } from 'next'

import ManageProductCategories from '@/components/screens/manage/pages/product-categories/ManageProductCategories'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Manage Product Categories Page',
	...NO_INDEX_PAGE,
}

export default function ManageProductCategoriesPage() {
	return <ManageProductCategories />
}
