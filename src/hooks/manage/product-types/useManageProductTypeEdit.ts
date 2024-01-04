import { getAdminUrl } from '@/config/url.config'
import { ProductTypeService } from '@/services/product-type/product-type.service'
import { TypeProductTypeInput } from '@/services/product-type/types/product-type.type'
import { getKeys } from '@/utils/custom-utils/get-keys'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageProductTypeEdit = (
	queryId: string,
	setValue: UseFormSetValue<TypeProductTypeInput>
) => {
	const queryClient = useQueryClient()

	const { push } = useRouter()

	const typeId = queryId

	const {
		isSuccess,
		isError,
		data: type,
	} = useQuery({
		queryKey: ['get manage product types', typeId],
		queryFn: () => ProductTypeService.getById(typeId),
		enabled: !!queryId,
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(type).forEach((key) => {
				setValue(key, type[key])
			})
		}
	}, [isSuccess])

	useEffect(() => {
		if (isError) {
			toastError('Ошибка при получении типа')
		}
	}, [isError])

	const { mutateAsync: updateType } = useMutation({
		mutationKey: ['update manage product types'],
		mutationFn: (data: TypeProductTypeInput) =>
			ProductTypeService.update(typeId, data),
		onError: () => {
			toastError('Ошибка при обновлении типа')
		},
		onSuccess: async () => {
			toast.success('Тип успешно обновлен')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product types', typeId],
			})
			push(getAdminUrl('/product-types'))
		},
	})

	const onSubmit: SubmitHandler<TypeProductTypeInput> = async (data) => {
		await updateType(data)
	}

	return { onSubmit }
}
