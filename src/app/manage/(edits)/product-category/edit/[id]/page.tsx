import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageProductCategoryEdit from '@/components/screens/manage/edits/product-category/ManageProductCategoryEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { IPageIdParam } from '@/shared/interfaces/page-params.interface'

export const metadata: Metadata = {
	title: 'Product Category Edit Page',
	...NO_INDEX_PAGE,
}

export default function ProductCategoryEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageProductCategoryEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
