import NotFoundPage from '@/app/not-found'
import Shop from '@/components/screens/shop/Shop'
import { IPageSlugParam } from '@/shared/interfaces/page-params.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Shop',
	description: '',
}

export default function ShopPage({ params }: IPageSlugParam) {
	return params.slug ? <Shop query={params.slug} /> : <NotFoundPage />
}
