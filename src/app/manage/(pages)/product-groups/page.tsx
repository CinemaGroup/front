import type { Metadata } from 'next'

import ManageProductGroups from '@/components/screens/manage/pages/product-groups/ManageProductGroups'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Manage Product Groups Page',
	...NO_INDEX_PAGE,
}

export default function ManageProductGroupsPage() {
	return <ManageProductGroups />
}
