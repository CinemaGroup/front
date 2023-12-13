import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import cn from 'classnames'
import { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { IManageProductControl } from '../interface/variations.interface'
import styles from './ManageProductGets.module.scss'

const ManageProductGets: FC<IManageProductControl> = ({ control }) => {
	const { fields, remove, append } = useFieldArray({
		control,
		name: 'gets',
	})

	return (
		<div className={styles.getsWrapper}>
			<SubHeading>Что вы получите после заказа?</SubHeading>
			<div className={styles.gets}>
				{fields.map((field, index) => (
					<div key={index} className={styles.getsItems}>
						<h3 className={styles.subtitle}>Блок {index + 1}</h3>
						<div className={styles.getsFill}>
							<Controller
								name={`gets.${index}.title`}
								defaultValue={''}
								control={control}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<Field
										key={field.id}
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
								name={`gets.${index}.imagePath`}
								control={control}
								defaultValue={''}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										className={styles.file}
										onChange={onChange}
										value={value}
										error={error}
										label="Выберите Иконку"
										variant="icon"
									/>
								)}
								rules={{
									required: 'Иконка обязательное поле!',
								}}
							/>
							<Controller
								name={`gets.${index}.description`}
								control={control}
								defaultValue={''}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<TextEditor
										key={field.id}
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
						</div>
						{fields.length > 1 && (
							<Button
								variant="light"
								className={cn(styles.button, styles.margin)}
								type="button"
								onClick={() => remove(index)}
							>
								<MaterialIcon name="MdDeleteOutline" />
								Удалить Блок
							</Button>
						)}
					</div>
				))}
			</div>
			<Button
				className={cn(styles.button, styles.margin)}
				variant="light"
				type="button"
				onClick={() =>
					append({
						title: '',
						description: '',
						imagePath: '',
					})
				}
			>
				<MaterialIcon name="MdAddCircleOutline" />
				Добавить Блок
			</Button>
		</div>
	)
}

export default ManageProductGets
