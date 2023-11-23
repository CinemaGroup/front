import { ProductTypeService } from '@/services/product-type/product-type.service'
import { useQuery } from '@tanstack/react-query'

export const useProductTypes = () => {
	const { data } = useQuery({
		queryKey: ['get all product types'],
		queryFn: () => ProductTypeService.getAll(),
		select: ({ data }) => data,
	})

	return { types: data?.types, length: data?.length }
}
