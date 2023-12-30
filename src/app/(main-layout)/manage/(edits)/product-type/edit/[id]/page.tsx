import NotFoundPage from '@/app/(main-layout)/not-found'
import ManageProductTypeEdit from '@/components/screens/manage/edits/product-type/ManageProductTypeEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { IPageIdParam } from '@/shared/interfaces/page-params.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Product Type Edit Page',
	...NO_INDEX_PAGE,
}

export default function ProductTypeEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageProductTypeEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
