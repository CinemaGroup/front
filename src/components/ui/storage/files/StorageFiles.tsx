import { useDragAndDrop } from '@/hooks/custom-hooks/drag-and-drop/drag-and-drop'
import { useDeleteFile } from '@/hooks/mutations/file/useDeleteFile'
import { useFiles } from '@/hooks/queries/files/useFiles'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import SearchField from '../../form-elements/search-field/SearchField'
import Icon from '../../icon/Icon'
import styles from '../Storage.module.scss'
import { IStorageFiles } from '../interface/storage.interface'
import StorageSelectFolder from '../select-folder/StorageSelectFolder'

const StorageFiles: FC<IStorageFiles> = ({
	queryParams,
	isFilterUpdated,
	onFileSelect,
}) => {
	const { deleteFile } = useDeleteFile()
	const { files, searchTerm, handleSearch } = useFiles(
		queryParams,
		isFilterUpdated
	)
	const [draggedFiles, setDraggedFiles] = useState<File[]>()
	const {
		dropped,
		setDropped,
		onDragOver,
		onDragLeave,
		onDrop,
		setSelectedFolder,
		mutateAsync,
	} = useDragAndDrop(setDraggedFiles)

	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		setIsShow(dropped)
	}, [dropped])

	const handleFileSelect = (fileUrl: string) => {
		onFileSelect(fileUrl)
	}

	return (
		<div className={styles.filesWrapper}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				variant="custom"
				className={styles.search}
			/>
			<div
				className={styles.filesFill}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={(e) => {
					onDrop(e)
				}}
			>
				<ul className={styles.files}>
					{files?.map((file, index) => (
						<li key={index} className={styles.file}>
							<button
								className={styles.fileBtn}
								onClick={() => handleFileSelect(file.url)}
							>
								<div className={styles.filePreview}>
									<Image
										priority
										draggable={false}
										fill
										src={file.url}
										alt={file.name}
									/>
								</div>
								<span className={styles.name}>{file.name}</span>
							</button>
							<button
								className={styles.remove}
								onClick={() => deleteFile(file.url)}
							>
								<Icon name="Trash2" />
							</button>
						</li>
					))}
					{dropped && (
						<StorageSelectFolder
							isShow={isShow}
							files={draggedFiles}
							setDropped={setDropped}
							setIsShow={setIsShow}
							setSelectedFolder={setSelectedFolder}
							mutateAsync={mutateAsync}
						/>
					)}
				</ul>
			</div>
		</div>
	)
}

export default StorageFiles
