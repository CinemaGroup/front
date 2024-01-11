'use client'

import Container from '@/components/ui/container/Container'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { useManageProductCategoryEdit } from '@/hooks/manage/product-categories/useManageProductCategoryEdit'
import { TypeProductCategoryInput } from '@/services/product-category/types/product-category.type'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from './ManageProductCategoryEdit.module.scss'

const ManageProductCategoryEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const {
		handleSubmit,
		setValue,
		control,
		register,
		formState: { errors },
	} = useForm<TypeProductCategoryInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useManageProductCategoryEdit(queryId, setValue)

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<SubHeading className={styles.subtitle}>
						Категория Продукта
					</SubHeading>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<Field
							{...register('name', {
								required: 'Название обязательное поле!',
							})}
							className={styles.field}
							label="Название"
							error={errors.name}
						/>
						<Controller
							name="imagePath"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.file}
									onChange={onChange}
									value={value}
									error={error}
									label="Выберите иконку"
									variant="thumbnail"
								/>
							)}
							rules={{
								required: 'Картинка обязательное поле!',
							}}
						/>
						<Controller
							name="backgroundImage"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.file}
									onChange={onChange}
									value={value}
									error={error}
									label="Выберите фоновую картинку для внутр. стр. продукта"
									variant="poster"
								/>
							)}
							rules={{
								required: 'Фоновая картинка обязательное поле!',
							}}
						/>
						<Controller
							name="phoneImage"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.file}
									onChange={onChange}
									value={value}
									error={error}
									label="Выберите картинку телефона"
									variant="poster"
								/>
							)}
							rules={{
								required: 'Картинка телефона обязательное поле!',
							}}
						/>
						<Button variant="light" className={styles.update}>
							Обновить
						</Button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageProductCategoryEdit
