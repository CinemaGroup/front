import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useFilteredProducts = (isFilterUpdated: any, queryParams: any) => {
	const { data } = useQuery({
		queryKey: ['products explorer', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		select: ({ data }) => data,
		enabled: isFilterUpdated,
	})

	return { products: data?.products, length: data?.length }
}
