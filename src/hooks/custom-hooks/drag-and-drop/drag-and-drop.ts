import { FileService } from '@/services/file/file.service'
import { toastError } from '@/utils/custom-utils/toast-error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useState } from 'react'

export const useDragAndDrop = (
	setFiles: Dispatch<SetStateAction<File[] | undefined>>
) => {
	const [dragOver, setDragOver] = useState(false)
	const [fileDropError, setFileDropError] = useState('')
	const [selectedFiles, setSelectedFiles] = useState<File[]>()
	const [selectedFolder, setSelectedFolder] = useState<string>('images')
	const [dropped, setDropped] = useState(false)
	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => FileService.upload(data, selectedFolder),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get files'] })
			queryClient.invalidateQueries({ queryKey: ['get file directories'] })
			setDropped(false)
			setSelectedFiles(undefined)
			setSelectedFolder('images')
		},
		onError: (error) => {
			toastError('Ошибка при загрузке файла')
		},
	})

	const onDragOver = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setDragOver(true)
	}

	const onDragLeave = () => setDragOver(false)

	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	
		setDragOver(false);
		setDropped(true);
	
		const selectedFiles = e?.dataTransfer?.files;
	
		if (!selectedFiles || selectedFiles.length === 0) {
			return setFileDropError('No files provided!');
		}
	
		for (let i = 0; i < selectedFiles.length; i++) {
			if (selectedFiles[i].type.split('/')[0] !== 'image') {
				return setFileDropError('Please provide only image files to upload!');
			}
		}
	
		setFiles(Array.from(selectedFiles));
	};

	return {
		dropped,
		dragOver,
		setDropped,
		setDragOver,
		onDragOver,
		onDragLeave,
		onDrop,
		setSelectedFolder,
		selectedFolder,
		selectedFiles,
		fileDropError,
		mutateAsync,
		setFileDropError,
	}
}
