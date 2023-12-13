import { FileService } from '@/services/file/file.service'
import { TypeFileFilters } from '@/shared/types/file.type'
import { useQuery } from '@tanstack/react-query'

export const useFiles = (
	queryParams: TypeFileFilters,
	isFilterUpdated: boolean
) => {
	const initialData = useQuery({
		queryKey: ['get files'],
		queryFn: () => FileService.getAll(),
		select: ({ data }) => data,
	})

	const { data } = useQuery({
		queryKey: ['get files', queryParams],
		queryFn: () => FileService.getAll(queryParams),
		select: ({ data }) => data,
		initialData: () => ({ data: initialData.data }),
		enabled: !!isFilterUpdated,
	})

	return { files: data }
}
