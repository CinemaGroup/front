import { ITableItem } from '@/components/ui/manage/manage-table/interface/manage-table.interface'
import { getAdminUrl } from '@/config/url.config'
import useDebounce from '@/hooks/custom-hooks/debounce/useDebounce'
import { ProductGroupService } from '@/services/product-group/product-group.service'
import { convertDate } from '@/utils/converts/convert-date'
import { descriptionToExcerpt } from '@/utils/converts/description-to-excerpt'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useManageProductGroups = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 0)

	const queryClient = useQueryClient()

	const { push } = useRouter()

	const queryData = useQuery({
		queryKey: ['get manage product groups list', debounceSearch],
		queryFn: () =>
			ProductGroupService.getAll({
				searchTerm: debounceSearch,
				perPage: 10,
			}),
		select: ({ data }) =>
			data.groups.map(
				(group): ITableItem => ({
					id: group.id,
					editUrl: getAdminUrl(`/product-group/edit/${group.id}`),
					data: [
						group.name,
						group.slug,
						descriptionToExcerpt(group.description, 25),
						convertDate(group.createdAt),
					],
				})
			),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create manage product group'],
		mutationFn: () => ProductGroupService.create(),
		onError: (error) => {
			toastError('Ошибка при создании группы')
		},
		onSuccess: ({ data: id }) => {
			toast.success('Группа успешно создана')
			push(getAdminUrl(`/product-group/edit/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete manage product group'],
		mutationFn: (groupId: string) => ProductGroupService.delete(groupId),
		onError: () => {
			toastError('Ошибка при удалении группы')
		},
		onSuccess: async () => {
			toast.success('Группа успешно удалена')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product groups list'],
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
