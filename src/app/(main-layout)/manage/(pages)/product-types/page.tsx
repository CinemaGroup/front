import type { Metadata } from 'next'

import ManageProductTypes from '@/components/screens/manage/pages/product-types/ManageProductTypes'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Manage Product Types Page',
	...NO_INDEX_PAGE,
}

export default function ManageProductTypesPage() {
	return <ManageProductTypes />
}
