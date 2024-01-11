import Product from '@/components/screens/product/Product'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParam } from '@/shared/interfaces/page-params.interface'
import type { Metadata } from 'next'
import NotFoundPage from '../../not-found'

export const metadata: Metadata = {
	title: 'Product Page',
	description: '',
}

export const revalidate = 60

async function getServerSideProps(slug: string) {
	const product = await ProductService.getBySlug(slug)

	const similarProducts = await ProductService.getSimilar(slug)

	return { product, similarProducts }
}

export default async function ProductPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	const { product, similarProducts } = await getServerSideProps(params.slug)

	return <Product product={product} similarProducts={similarProducts || []} />
}
