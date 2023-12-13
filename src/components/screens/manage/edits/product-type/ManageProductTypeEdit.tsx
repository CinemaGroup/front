'use client'

import Container from '@/components/ui/container/Container'
import Button from '@/components/ui/form-elements/button/Button'
import ColorPicker from '@/components/ui/form-elements/color-picker/ColorPicker'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { useManageProductTypeEdit } from '@/hooks/manage/product-types/useManageProductTypeEdit'
import { TypeProductTypeInput } from '@/services/product-type/types/product-type.type'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageProductTypeEdit.module.scss'

const ManageProductTypeEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const {
		handleSubmit,
		setValue,
		control,
		register,
		formState: { errors },
	} = useForm<TypeProductTypeInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useManageProductTypeEdit(queryId, setValue)

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<SubHeading className={styles.subtitle}>Тип Продукта</SubHeading>
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
						<Controller
							name="color"
							control={control}
							render={({
								field: { onChange },
								fieldState: { error },
							}) => (
								<ColorPicker
									error={error}
									label="Выберите цвет"
									onChange={(color) => {
										onChange(color.hex)
									}}
								/>
							)}
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

export default ManageProductTypeEdit
