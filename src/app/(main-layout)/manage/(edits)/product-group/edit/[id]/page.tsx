import type { Metadata } from 'next'

import NotFoundPage from '@/app/(main-layout)/not-found'
import ManageProductGroupEdit from '@/components/screens/manage/edits/product-group/ManageProductGroupEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { IPageIdParam } from '@/shared/interfaces/page-params.interface'

export const metadata: Metadata = {
	title: 'Product Group Edit Page',
	...NO_INDEX_PAGE,
}

export default function ProductGroupEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageProductGroupEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
