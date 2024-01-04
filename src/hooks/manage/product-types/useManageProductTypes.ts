import { ITableItem } from '@/components/ui/manage/manage-table/interface/manage-table.interface'
import { getAdminUrl } from '@/config/url.config'
import useDebounce from '@/hooks/custom-hooks/debounce/useDebounce'
import { ProductTypeService } from '@/services/product-type/product-type.service'
import { convertDate } from '@/utils/converts/convert-date'
import { descriptionToExcerpt } from '@/utils/converts/description-to-excerpt'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useManageProductTypes = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 0)

	const queryClient = useQueryClient()

	const { push } = useRouter()

	const queryData = useQuery({
		queryKey: ['get manage product types list', debounceSearch],
		queryFn: () =>
			ProductTypeService.getAll({
				searchTerm: debounceSearch,
				perPage: 10,
			}),
		select: ({ data }) =>
			data.types.map(
				(type): ITableItem => ({
					id: type.id,
					editUrl: getAdminUrl(`/product-type/edit/${type.id}`),
					data: [
						type.name,
						type.slug,
						descriptionToExcerpt(type.description, 25),
						type.color,
						convertDate(type.createdAt),
					],
				})
			),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create manage product type'],
		mutationFn: () => ProductTypeService.create(),
		onError: () => {
			toastError('Ошибка при создании типа')
		},
		onSuccess: ({ data: id }) => {
			toast.success('Тип успешно создан')
			push(getAdminUrl(`/product-type/edit/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete manage product type'],
		mutationFn: (typeId: string) => ProductTypeService.delete(typeId),
		onError: () => {
			toastError('Ошибка при удалении типа')
		},
		onSuccess: async () => {
			toast.success('Тип успешно удален')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product types list'],
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
