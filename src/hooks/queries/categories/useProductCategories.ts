import { ProductCategoryService } from '@/services/product-category/product-category.service'
import { useQuery } from '@tanstack/react-query'

export const useProductCategories = (type: string) => {
	const { data } = useQuery({
		queryKey: ['get product categories collections'],
		queryFn: () => ProductCategoryService.getCollections(type),
		select: ({ data }) => data,
	})

	return { categories: data?.categories, length: data?.length }
}
