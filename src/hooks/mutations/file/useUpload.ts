import { FileService } from '@/services/file/file.service'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

type TypeUpload = (
	folder?: string,
	onFileSelect?: (fileUrl: string) => void
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	removeFile: () => void
	uploadedFiles: string[] | null
}

export const useUpload: TypeUpload = (folder, onFileSelect) => {
	const [uploadedFiles, setUploadedFiles] = useState<string[] | null>([])

	const { mutateAsync } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (formData: FormData) => FileService.upload(formData, folder),
		onSuccess: ({ data }) => {
			const allUploadedFiles = data.map((file) => file.url)

			setUploadedFiles((prevUploadedFiles) => {
				if (prevUploadedFiles) {
					return [...prevUploadedFiles, ...allUploadedFiles]
				}
				return allUploadedFiles
			})

			if (onFileSelect) {
				allUploadedFiles.forEach((fileUrl) => {
					onFileSelect(fileUrl)
				})
			}
		},
		onError: (error) => {
			toastError('Ошибка при загрузке файла')
		},
	})

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			await mutateAsync(formData)
		},
		[mutateAsync]
	)

	const removeFile = useCallback(() => {
		setUploadedFiles(null)
	}, [])

	return useMemo(
		() => ({
			uploadFile,
			removeFile,
			uploadedFiles,
		}),
		[uploadFile, removeFile, uploadedFiles]
	)
}
