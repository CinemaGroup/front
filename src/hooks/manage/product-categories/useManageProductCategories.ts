import { ITableItem } from '@/components/ui/manage/manage-table/interface/manage-table.interface'
import { getAdminUrl } from '@/config/url.config'
import useDebounce from '@/hooks/custom-hooks/debounce/useDebounce'
import { ProductCategoryService } from '@/services/product-category/product-category.service'
import { convertDate } from '@/utils/converts/convert-date'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useManageProductCategories = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 0)

	const queryClient = useQueryClient()

	const { push } = useRouter()

	const queryData = useQuery({
		queryKey: ['get manage product categories list', debounceSearch],
		queryFn: () =>
			ProductCategoryService.getAll({
				searchTerm: debounceSearch,
				perPage: 10,
			}),
		select: ({ data }) =>
			data.categories.map(
				(category): ITableItem => ({
					id: category.id,
					editUrl: getAdminUrl(`/product-category/edit/${category.id}`),
					data: [
						category.name,
						category.slug,
						category.imagePath,
						convertDate(category.createdAt),
					],
				})
			),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create manage product category'],
		mutationFn: () => ProductCategoryService.create(),
		onError: () => {
			toastError('Ошибка при создании категории')
		},
		onSuccess: ({ data: id }) => {
			toast.success('Категория успешно создана')
			push(getAdminUrl(`/product-category/edit/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete manage product category'],
		mutationFn: (categoryId: string) =>
			ProductCategoryService.delete(categoryId),
		onError: () => {
			toastError('Ошибка при удалении категории')
		},
		onSuccess: async () => {
			toast.success('Категория успешно удалена')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product categories list'],
			})
		},
	})

	return useMemo(
		() => ({
			searchTerm,
			...queryData,
			handleSearch,
			createAsync,
			deleteAsync,
		}),
		[queryData, searchTerm, createAsync, deleteAsync]
	)
}
