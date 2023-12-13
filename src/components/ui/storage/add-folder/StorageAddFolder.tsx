'use client'

import { useAddDirectory } from '@/hooks/mutations/file/useAddDirectory'
import cn from 'classnames'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../form-elements/button/Button'
import Field from '../../form-elements/field/Field'
import MaterialIcon from '../../icon/MaterialIcon'
import styles from '../Storage.module.scss'
import { IStorageAddFolder } from '../interface/storage.interface'
import { TypeAddDirectory } from './type/add-folder.type'

const StorageAddFolder: FC<IStorageAddFolder> = ({ isShow, setIsShow }) => {
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm<TypeAddDirectory>({
		mode: 'onChange',
	})

	const { addDirectory } = useAddDirectory()

	const onSubmit: SubmitHandler<TypeAddDirectory> = async (data) => {
		await addDirectory(data.folder)
		reset()

		setIsShow(false)
	}

	return (
		<div
			className={cn(styles.overlay, styles.directoryOverlay, {
				[styles.show]: isShow,
			})}
		>
			<div className={styles.directory}>
				<button
					type="button"
					onClick={() => setIsShow(false)}
					className={styles.close}
				>
					<MaterialIcon name="MdClose" />
				</button>
				<div className={styles.directoryFill}>
					<h2 className={styles.heading}>Добавить папку</h2>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<Field
							{...register('folder', {
								required: 'Название обязательное поле!',
							})}
							error={errors.folder}
							className={styles.field}
							placeholder="Название"
						/>
						<Button className={styles.createDirectory} variant="dark">
							Создать
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default StorageAddFolder
