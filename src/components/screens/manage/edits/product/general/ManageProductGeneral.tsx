import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import ReactSelect from '@/components/ui/selects/react-select/ReactSelect'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { useProductCategoriesSelect } from '@/hooks/queries/selects/useProductCategoriesSelect'
import { useProductGroupsSelect } from '@/hooks/queries/selects/useProductGroupsSelect'
import { useProductTypesSelect } from '@/hooks/queries/selects/useProductTypesSelect'
import { useProductsSelect } from '@/hooks/queries/selects/useProductsSelect'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { IManageProductControl } from '../interface/variations.interface'
import styles from './ManageProductGeneral.module.scss'

const ManageProductGeneral: FC<IManageProductControl> = ({ control }) => {
	const { products } = useProductsSelect()
	const { categories } = useProductCategoriesSelect()
	const { types } = useProductTypesSelect()
	const { groups } = useProductGroupsSelect()

	return (
		<>
			<SubHeading>Общие настройки</SubHeading>
			<div className={styles.general}>
				<Controller
					name="name"
					defaultValue={''}
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Field
							className={styles.field}
							onChange={onChange}
							value={value}
							label="Название"
							error={error}
						/>
					)}
					rules={{
						required: 'Название обязательное поле!',
					}}
				/>
				<Controller
					name={`relatedIds`}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<ReactSelect
							field={field}
							options={products}
							isMulti
							label="Выберите Похожие Продукты (Необязательно)"
							error={error}
							className={styles.select}
						/>
					)}
				/>
				<Controller
					name="description"
					control={control}
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
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
					name='videoPoster'
					control={control}
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							className={styles.file}
							onChange={onChange}
							value={value}
							error={error}
							label="Выберите постер для видео (Необязательно)"
							variant="poster"
						/>
					)}
				/>
				<Controller
					name="videoPath"
					defaultValue={''}
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Field
							className={styles.field}
							onChange={onChange}
							value={value}
							label="Ссылка на видео (Необязательно)"
							error={error}
						/>
					)}
				/>
				<Controller
					name={`productCategoryId`}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<ReactSelect
							field={field}
							options={categories}
							label="Категория"
							error={error}
							className={styles.select}
						/>
					)}
					rules={{
						required: 'Категория обязательное поле!',
					}}
				/>
				<Controller
					name={`productTypeId`}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<ReactSelect
							field={field}
							options={types}
							label="Тип"
							error={error}
							className={styles.select}
						/>
					)}
					rules={{
						required: 'Тип обязательное поле!',
					}}
				/>
				<Controller
					name={`productGroupId`}
					control={control}
					render={({ field, fieldState: { error } }) => (
						<ReactSelect
							field={field}
							options={groups}
							label="Группа"
							error={error}
							className={styles.select}
						/>
					)}
					rules={{
						required: 'Группа обязательное поле!',
					}}
				/>
			</div>
		</>
	)
}

export default ManageProductGeneral
