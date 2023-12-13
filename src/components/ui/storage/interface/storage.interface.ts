import { TypeFileFilters } from '@/shared/types/file.type'
import { UseMutateAsyncFunction } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction } from 'react'

export interface IStorage {
	onFileSelect: (fileUrl: string) => void
}

export interface IStorageFolders {
	queryParams: TypeFileFilters
	updateQueryParams: (key: keyof TypeFileFilters, value: string) => void
	removeQueryParam: (key: keyof TypeFileFilters) => void
}

export interface IStorageFiles {
	queryParams: TypeFileFilters
	isFilterUpdated: boolean
	onFileSelect: (fileUrl: string) => void
}

export interface IStorageAddFolder {
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export interface IStorageSelectFolder {
	file: File | undefined
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
	setSelectedFolder: Dispatch<SetStateAction<string>>
	mutateAsync: UseMutateAsyncFunction<
		AxiosResponse<{ url: string; name: string }[], any>,
		Error,
		FormData,
		unknown
	>
	setDropped: Dispatch<SetStateAction<boolean>>
}
