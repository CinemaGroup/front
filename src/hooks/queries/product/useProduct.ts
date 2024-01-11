import { ProductService } from '@/services/product/product.service'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useProduct = (querySlug: string) => {
	const productSlug = querySlug

	const { isError, data: product } = useQuery({
		queryKey: ['get product', productSlug],
		queryFn: () => ProductService.getBySlug(productSlug),
		enabled: !!productSlug,
	})

	useEffect(() => {
		if (isError) {
			toastError('Ошибка при получении продукта')
		}
	}, [isError])

	return { product }
}
