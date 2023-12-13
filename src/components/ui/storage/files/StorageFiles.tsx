import { useDragAndDrop } from '@/hooks/custom-hooks/drag-and-drop/drag-and-drop'
import { useDeleteFile } from '@/hooks/mutations/file/useDeleteFile'
import { useFiles } from '@/hooks/queries/files/useFiles'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import PiIcon from '../../icon/PiIcon'
import styles from '../Storage.module.scss'
import { IStorageFiles } from '../interface/storage.interface'
import StorageSelectFolder from '../select-folder/StorageSelectFolder'

const StorageFiles: FC<IStorageFiles> = ({
	queryParams,
	isFilterUpdated,
	onFileSelect,
}) => {
	const { deleteFile } = useDeleteFile()
	const { files } = useFiles(queryParams, isFilterUpdated)
	const [file, setFile] = useState<File>()
	const {
		dropped,
		setDropped,
		onDragOver,
		onDragLeave,
		onDrop,
		setSelectedFolder,
		mutateAsync,
	} = useDragAndDrop(setFile)

	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		setIsShow(dropped)
	}, [dropped])

	const handleFileSelect = (fileUrl: string) => {
		onFileSelect(fileUrl)
	}

	return (
		<div
			className={styles.filesWrapper}
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
							<PiIcon name="PiTrash" />
						</button>
					</li>
				))}
				{dropped && (
					<StorageSelectFolder
						isShow={isShow}
						file={file}
						setDropped={setDropped}
						setIsShow={setIsShow}
						setSelectedFolder={setSelectedFolder}
						mutateAsync={mutateAsync}
					/>
				)}
			</ul>
		</div>
	)
}

export default StorageFiles
