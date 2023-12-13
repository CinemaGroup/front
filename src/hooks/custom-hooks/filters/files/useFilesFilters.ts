import { useActions } from '@/hooks/queries/user/useActions'
import { useTypedSelector } from '@/hooks/queries/user/useTypedSelector'
import { TypeFileFilters } from '@/shared/types/file.type'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useFilesFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateFilesQueryParam } = useActions()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		(state) => state.filesFilters
	)

	useEffect(() => {
		searchParams?.forEach((value, key) => {
			updateFilesQueryParam({
				key: key as keyof TypeFileFilters,
				value,
			})
		})
	}, [])

	const updateQueryParams = (key: keyof TypeFileFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams?.toString())

		if (value && value !== undefined) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		history.pushState({}, '', pathname + `?${newParams.toString()}`)
		updateFilesQueryParam({ key, value })
	}

	const removeQueryParam = (key: keyof TypeFileFilters) => {
		updateQueryParams(key, '')
		history.pushState({}, '', pathname);
	};

	return {
		removeQueryParam,
		updateQueryParams,
		queryParams,
		isFilterUpdated,
	}
}
