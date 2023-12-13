'use client'

import { useFilesFilters } from '@/hooks/custom-hooks/filters/files/useFilesFilters'
import { FC, useState } from 'react'
import Button from '../form-elements/button/Button'
import styles from './Storage.module.scss'
import StorageAddFolder from './add-folder/StorageAddFolder'
import StorageFiles from './files/StorageFiles'
import StorageFolders from './folders/StorageFolders'
import { IStorage } from './interface/storage.interface'

const Storage: FC<IStorage> = ({ onFileSelect }) => {
	const { isFilterUpdated, queryParams, updateQueryParams, removeQueryParam } = useFilesFilters()
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.storage}>
			<div className={styles.bar}>
				<StorageFolders
					queryParams={queryParams}
					updateQueryParams={updateQueryParams}
					removeQueryParam={removeQueryParam}
				/>
				<Button
					className={styles.addFolder}
					variant="light"
					type="button"
					onClick={() => setIsShow(true)}
				>
					Добавить папку
				</Button>
				<input type="file" hidden />
			</div>
			<StorageFiles
				isFilterUpdated={isFilterUpdated}
				queryParams={queryParams}
				onFileSelect={onFileSelect}
			/>
			<StorageAddFolder isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Storage
