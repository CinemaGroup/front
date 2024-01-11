import useDebounce from '@/hooks/custom-hooks/debounce/useDebounce'
import { FileService } from '@/services/file/file.service'
import { TypeFileFilters } from '@/shared/types/file.type'
import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

export const useFiles = (
	queryParams: TypeFileFilters,
	isFilterUpdated: boolean
) => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 200)

	const { data } = useQuery({
		queryKey: ['get files', queryParams, debounceSearch],
		queryFn: () =>
			FileService.getAll({ ...queryParams, searchTerm: debounceSearch }),
		select: ({ data }) => data,
		enabled: !!isFilterUpdated,
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { files: data, setSearchTerm, searchTerm, handleSearch }
}
