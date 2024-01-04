import { ITableItem } from '@/components/ui/manage/manage-table/interface/manage-table.interface'
import { getAdminUrl } from '@/config/url.config'
import useDebounce from '@/hooks/custom-hooks/debounce/useDebounce'
import { ProductService } from '@/services/product/product.service'
import { convertDate } from '@/utils/converts/convert-date'
import { descriptionToExcerpt } from '@/utils/converts/description-to-excerpt'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useManageProducts = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 0)

	const queryClient = useQueryClient()

	const { push } = useRouter()

	const queryData = useQuery({
		queryKey: ['get manage products list', debounceSearch],
		queryFn: () =>
			ProductService.getAll({
				searchTerm: debounceSearch,
				perPage: 10,
			}),
		select: ({ data }) =>
			data.products.map(
				(product): ITableItem => ({
					id: product.id,
					editUrl: getAdminUrl(`/product/edit/${product.id}`),
					data: [
						product.name,
						descriptionToExcerpt(product.description || '', 25),
						product.views,
						convertDate(product.createdAt),
					],
				})
			),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create manage product'],
		mutationFn: () => ProductService.create(),
		onError: (error) => {
			toastError('Ошибка при создании продукта')
		},
		onSuccess: ({ data: id }) => {
			toast.success('Продукт успешно создан')
			push(getAdminUrl(`/product/edit/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete manage product'],
		mutationFn: (productId: string) => ProductService.delete(productId),
		onError: (error) => {
			toastError('Ошибка при удалении продукта')
		},
		onSuccess: async () => {
			toast.success('Продукт успешно удален')
			await queryClient.invalidateQueries({
				queryKey: ['get manage products list'],
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
