import { IOption } from '@/components/ui/selects/react-select/interface/react-select.interface'
import { ProductGroupService } from '@/services/product-group/product-group.service'
import { useQuery } from '@tanstack/react-query'

export const useProductGroupsSelect = () => {
	const queryData = useQuery({
		queryKey: ['get all product groups select'],
		queryFn: () => ProductGroupService.getAll(),
		select: ({ data }) =>
			data.groups.map(
				(type): IOption => ({
					label: type.name,
					value: type.id,
				})
			) || [],
	})

	return { groups: queryData.data || [] }
}
