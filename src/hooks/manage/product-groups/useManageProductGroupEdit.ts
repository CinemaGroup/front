import { getAdminUrl } from '@/config/url.config'
import { ProductGroupService } from '@/services/product-group/product-group.service'
import { TypeProductGroupInput } from '@/services/product-group/types/product-group.type'
import { getKeys } from '@/utils/custom-utils/get-keys'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageProductGroupEdit = (
	queryId: string,
	setValue: UseFormSetValue<TypeProductGroupInput>
) => {
	const queryClient = useQueryClient()

	const { push } = useRouter()

	const groupId = queryId

	const {
		isSuccess,
		isError,
		data: group,
	} = useQuery({
		queryKey: ['get manage product groups', groupId],
		queryFn: () => ProductGroupService.getById(groupId),
		enabled: !!queryId,
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(group).forEach((key) => {
				setValue(key, group[key])
			})
		}
	}, [isSuccess])

	useEffect(() => {
		if (isError) {
			toastError('Ошибка при получении группы')
		}
	}, [isError])

	const { mutateAsync: updateGroup } = useMutation({
		mutationKey: ['update manage product groups'],
		mutationFn: (data: TypeProductGroupInput) =>
			ProductGroupService.update(groupId, data),
		onError: () => {
			toastError('Ошибка при обновлении группы')
		},
		onSuccess: async () => {
			toast.success('Группа успешно обновлена')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product groups', groupId],
			})
			push(getAdminUrl('/product-groups'))
		},
	})

	const onSubmit: SubmitHandler<TypeProductGroupInput> = async (data) => {
		await updateGroup(data)
	}

	return { onSubmit }
}
