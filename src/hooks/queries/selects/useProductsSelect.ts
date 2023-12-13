import { IOption } from '@/components/ui/selects/react-select/interface/react-select.interface'
import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'

export const useProductsSelect = () => {
	const queryData = useQuery({
		queryKey: ['get all products select'],
		queryFn: () => ProductService.getAll(),
		select: ({ data }) =>
			data.products.map(
				(product): IOption => ({
					label: product.name,
					value: product.id,
				})
			) || [],
	})

	return { products: queryData.data || [] }
}
