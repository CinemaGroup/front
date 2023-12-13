'use client'

import Container from '@/components/ui/container/Container'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import { useManageProductGroupEdit } from '@/hooks/manage/product-groups/useManageProductGroupEdit'
import { TypeProductGroupInput } from '@/services/product-group/types/product-group.type'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageProductGroupEdit.module.scss'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

const ManageProductGroupEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const {
		handleSubmit,
		setValue,
		control,
		register,
		formState: { errors },
	} = useForm<TypeProductGroupInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useManageProductGroupEdit(queryId, setValue)

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<SubHeading className={styles.subtitle}>Группа Продукта</SubHeading>
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
							name="description"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<TextEditor
									className={styles.editor}
									onChange={onChange}
									error={error}
									value={value}
									label="Описание"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Описание обязательное поле!',
								},
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

export default ManageProductGroupEdit
