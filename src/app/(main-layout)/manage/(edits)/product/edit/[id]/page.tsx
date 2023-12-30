import type { Metadata } from 'next'

import NotFoundPage from '@/app/(main-layout)/not-found'
import ManageProductEdit from '@/components/screens/manage/edits/product/ManageProductEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { IPageIdParam } from '@/shared/interfaces/page-params.interface'

export const metadata: Metadata = {
	title: 'Product Edit Page',
	...NO_INDEX_PAGE,
}

export default function ProductEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageProductEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
