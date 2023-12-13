import { IOption } from '@/components/ui/selects/react-select/interface/react-select.interface'
import { ProductCategoryService } from '@/services/product-category/product-category.service'
import { useQuery } from '@tanstack/react-query'

export const useProductCategoriesSelect = () => {
	const queryData = useQuery({
		queryKey: ['get all product categories select'],
		queryFn: () => ProductCategoryService.getAll(),
		select: ({ data }) =>
			data.categories.map(
				(category): IOption => ({
					label: category.name,
					value: category.id,
				})
			) || [],
	})

	return { categories: queryData.data || [] }
}
