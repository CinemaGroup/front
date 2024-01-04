import { getAdminUrl } from '@/config/url.config'
import { ProductCategoryService } from '@/services/product-category/product-category.service'
import { TypeProductCategoryInput } from '@/services/product-category/types/product-category.type'
import { getKeys } from '@/utils/custom-utils/get-keys'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageProductCategoryEdit = (
	queryId: string,
	setValue: UseFormSetValue<TypeProductCategoryInput>
) => {
	const queryClient = useQueryClient()

	const { push } = useRouter()

	const categoryId = queryId

	const {
		isSuccess,
		isError,
		data: category,
	} = useQuery({
		queryKey: ['get manage product category', categoryId],
		queryFn: () => ProductCategoryService.getById(categoryId),
		enabled: !!queryId,
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(category).forEach((key) => {
				setValue(key, category[key])
			})
		}
	}, [isSuccess])

	useEffect(() => {
		if (isError) {
			toastError('Ошибка при получении категории')
		}
	}, [isError])

	const { mutateAsync: updateCategory } = useMutation({
		mutationKey: ['update manage product category'],
		mutationFn: (data: TypeProductCategoryInput) =>
			ProductCategoryService.update(categoryId, data),
		onError: (error) => {
			toastError('Ошибка при обновлении категории')
		},
		onSuccess: async () => {
			toast.success('Категория успешно обновлена')
			await queryClient.invalidateQueries({
				queryKey: ['get manage product category', categoryId],
			})
			push(getAdminUrl('/product-categories'))
		},
	})

	const onSubmit: SubmitHandler<TypeProductCategoryInput> = async (data) => {
		await updateCategory(data)
	}

	return { onSubmit }
}
