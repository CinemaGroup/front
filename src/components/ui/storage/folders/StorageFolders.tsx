import { useDeleteFolder } from '@/hooks/mutations/file/useDeleteFolder'
import { useFileDirectories } from '@/hooks/queries/files/useFileDirectories'
import cn from 'classnames'
import { FC } from 'react'
import CiIcon from '../../icon/CiIcon'
import PiIcon from '../../icon/PiIcon'
import styles from '../Storage.module.scss'
import { IStorageFolders } from '../interface/storage.interface'

const StorageFolders: FC<IStorageFolders> = ({
	queryParams,
	updateQueryParams,
	removeQueryParam,
}) => {
	const { directories } = useFileDirectories()
	const { deleteFolder } = useDeleteFolder()

	return (
		<ul className={styles.folders}>
			<li className={styles.folder}>
					<button
						className={cn(styles.folderBtn, {
							[styles.active]: queryParams.folder === '',
						})}
						onClick={() => removeQueryParam('folder')}
					>
						<CiIcon name="CiFolderOn" />
						Все
					</button>
				</li>
			{directories?.map((directory, index) => (
				<li key={index} className={styles.folder}>
					<button
						className={cn(styles.folderBtn, {
							[styles.active]: queryParams.folder === directory,
						})}
						onClick={() => updateQueryParams('folder', directory)}
					>
						<CiIcon name="CiFolderOn" />
						{directory}
					</button>
					<button
						className={styles.deleteFolder}
						onClick={() => deleteFolder(directory)}
					>
						<PiIcon name="PiTrash" />
					</button>
				</li>
			))}
		</ul>
	)
}

export default StorageFolders
