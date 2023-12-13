import { ProductService } from '@/services/product/product.service'
import { ProductDataFilters } from '@/shared/types/product.type'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (
	queryParams: ProductDataFilters,
	isFilterUpdated: boolean
) => {
	const initialData = useQuery({
		queryKey: ['get all products'],
		queryFn: () => ProductService.getAll(),
		select: ({ data }) => data,
	})

	const { data } = useQuery({
		queryKey: ['get all products', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		select: ({ data }) => data,
		initialData: () => ({ data: initialData.data }),
		enabled: !!isFilterUpdated,
	})

	return { products: data?.products, length: data?.length }
}
