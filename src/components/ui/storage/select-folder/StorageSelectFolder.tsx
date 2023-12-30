import { useFileDirectories } from '@/hooks/queries/files/useFileDirectories'
import cn from 'classnames'
import { FC } from 'react'
import Icon from '../../icon/Icon'
import styles from '../Storage.module.scss'
import { IStorageSelectFolder } from '../interface/storage.interface'

const StorageSelectFolder: FC<IStorageSelectFolder> = ({
	file,
	isShow,
	setDropped,
	setIsShow,
	setSelectedFolder,
	mutateAsync,
}) => {
	const { directories } = useFileDirectories()

	return (
		<div
			className={cn(styles.overlay, styles.selectOverlay, {
				[styles.show]: isShow,
			})}
		>
			<div className={styles.select}>
				<button
					type="button"
					onClick={() => {
						setIsShow(false)
						setDropped(false)
					}}
					className={styles.close}
				>
					<Icon name="X" />
				</button>
				<div className={styles.selectFill}>
					<h2 className={styles.heading}>Выберите папку</h2>
					<ul className={styles.selectFolders}>
						{directories?.map((directory, index) => (
							<li key={index} className={styles.selectFolder}>
								<button
									type="button"
									onClick={() => {
										setSelectedFolder(directory)
										setIsShow(false)
										if (file) {
											const formData = new FormData()
											formData.append('file', file)
											mutateAsync(formData)
										}
									}}
								>
									<Icon name="Folder" />
									{directory}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default StorageSelectFolder
