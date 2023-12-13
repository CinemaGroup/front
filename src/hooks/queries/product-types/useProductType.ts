import { ProductTypeService } from '@/services/product-type/product-type.service'
import { useQuery } from '@tanstack/react-query'

export const useProductType = (slug: string) => {
	const { data } = useQuery({
		queryKey: ['get product type'],
		queryFn: () => ProductTypeService.bySlug(slug),
		select: ({ data }) => data,
	})

	return { type: data }
}
