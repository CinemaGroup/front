import { useActions } from '@/hooks/queries/user/useActions'
import { useTypedSelector } from '@/hooks/queries/user/useTypedSelector'
import { ProductDataFilters } from '@/shared/types/product.type'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useProductsFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateProductsQueryParam } = useActions()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		(state) => state.productsFilters
	)

	useEffect(() => {
		searchParams?.forEach((value, key) => {
			updateProductsQueryParam({
				key: key as keyof ProductDataFilters,
				value,
			})
		})
	}, [])

	const updateQueryParams = (key: keyof ProductDataFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams?.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		history.pushState({}, '', pathname + `?${newParams.toString()}`)
		updateProductsQueryParam({ key, value })
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated,
	}
}
