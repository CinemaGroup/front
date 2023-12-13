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
	uploadedFile: string | null
}

export const useUpload: TypeUpload = (folder, onFileSelect) => {
	const [uploadedFile, setUploadedFile] = useState<string | null>(null)

	const { mutateAsync } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => FileService.upload(data, folder),
		onSuccess: ({ data }) => {
			const fileUrl = data[0].url
			setUploadedFile(fileUrl)

			if (onFileSelect) {
				onFileSelect(fileUrl)
			}
		},
		onError: (error) => {
			toastError(error, 'Create Order')
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
		setUploadedFile(null)
	}, [])

	return useMemo(
		() => ({
			uploadFile,
			removeFile,
			uploadedFile,
		}),
		[uploadFile, removeFile, uploadedFile]
	)
}
