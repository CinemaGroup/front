import { ProductService } from '@/services/product/product.service'
import { ProductDataFilters } from '@/shared/types/product.type'
import { useQuery } from '@tanstack/react-query'

export const useProductCollections = (
	queryParams: ProductDataFilters,
	isFilterUpdated: boolean,
	type: string
) => {
	const initialData = useQuery({
		queryKey: ['get product collections'],
		queryFn: () =>
			ProductService.getCollection({
				perPage: -1,
				type: `${type}`,
			}),
		select: ({ data }) => data,
	})

	const { data } = useQuery({
		queryKey: ['get product collections', queryParams],
		queryFn: () =>
			ProductService.getCollection({ ...queryParams, type: `${type}` }),
		select: ({ data }) => data,
		initialData: () => ({ data: initialData.data }),
		enabled: !!isFilterUpdated,
	})

	return { groups: data?.groups, length: data?.length }
}
