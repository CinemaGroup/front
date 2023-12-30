import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Не найдено',
	...NO_INDEX_PAGE,
}

export default function NotFoundPage() {
	return <div></div>
}
