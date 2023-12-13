import { IOption } from '@/components/ui/selects/react-select/interface/react-select.interface'
import { ProductTypeService } from '@/services/product-type/product-type.service'
import { useQuery } from '@tanstack/react-query'

export const useProductTypesSelect = () => {
	const queryData = useQuery({
		queryKey: ['get all product types select'],
		queryFn: () => ProductTypeService.getAll(),
		select: ({ data }) =>
			data.types.map(
				(type): IOption => ({
					label: type.name,
					value: type.id,
				})
			) || [],
	})

	return { types: queryData.data || [] }
}
