import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Icon from '@/components/ui/icon/Icon'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { generateRandomNumber } from '@/utils/custom-utils/random-number'
import cn from 'classnames'
import { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { IManageProductVariations } from '../interface/variations.interface'
import styles from './ManageProductVariations.module.scss'
import ManageProductService from './service/ManageProductService'

const ManageProductVariations: FC<IManageProductVariations> = ({
	control,
	unregister,
}) => {
	const { fields, remove, append } = useFieldArray({
		control,
		name: 'variations',
	})

	return (
		<>
			<SubHeading>Вариации для продукта</SubHeading>
			<div className={styles.variationsWrapper}>
				{fields.length > 0 && (
					<div className={styles.variations}>
						{fields.map((field, index) => (
							<div className={styles.variationsInner} key={index}>
								<div className={styles.variation}>
									<h3 className={styles.subtitle}>Вариация {index + 1}</h3>
									<div className={styles.variationFill}>
										<Controller
											name={`variations.${index}.class`}
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
													label="Класс"
													error={error}
												/>
											)}
											rules={{
												required: 'Класс обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.sku`}
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
													label="Артикул"
													error={error}
												/>
											)}
											rules={{
												required: 'Артикул обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.rating`}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													key={field.id}
													className={styles.field}
													onChange={(e) =>
														onChange(parseFloat(e.target.value) || 0)
													}
													value={value}
													label="Рейтинг (Он автоматом поставил от 4.9 до 5)"
													error={error}
												/>
											)}
											rules={{
												required: 'Рейтинг обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.salePrice`}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													key={field.id}
													className={styles.field}
													onChange={(e) =>
														onChange(parseInt(e.target.value, 10) || 0)
													}
													value={value}
													label="Скидочная цена (Необязательно)"
													error={error}
												/>
											)}
										/>
										<Controller
											name={`variations.${index}.price`}
											defaultValue={0}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													key={field.id}
													className={styles.field}
													onChange={(e) =>
														onChange(parseInt(e.target.value, 10) || 0)
													}
													value={value}
													label="Обычная цена"
													error={error}
												/>
											)}
											rules={{
												required: 'Обычная цена обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.boughtTimes`}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													key={field.id}
													className={styles.field}
													onChange={(e) =>
														onChange(parseInt(e.target.value, 10) || 0)
													}
													value={value}
													label="Сколько раз покупали (Он автоматом поставил от 2000 до 5000)"
													error={error}
												/>
											)}
											rules={{
												required: 'Сколько раз покупали обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.composition`}
											control={control}
											defaultValue={''}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<TextEditor
													className={styles.editor}
													onChange={onChange}
													error={error}
													value={value}
													label="Что входит в состав пакета"
												/>
											)}
											rules={{
												required:
													'Что входит в состав пакета обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.information`}
											control={control}
											defaultValue={''}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<TextEditor
													className={styles.editor}
													onChange={onChange}
													error={error}
													value={value}
													label="Тех. информация"
												/>
											)}
											rules={{
												required: 'Тех. информация обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.shortDescription`}
											control={control}
											defaultValue={''}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<TextEditor
													className={styles.editor}
													onChange={onChange}
													error={error}
													value={value}
													label="Краткое описание"
												/>
											)}
											rules={{
												required: 'Краткое описание обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${index}.image`}
											defaultValue={''}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<UploadField
													className={styles.file}
													onChange={onChange}
													value={value}
													error={error}
													label="Изображение"
													variant="thumbnail"
												/>
											)}
											rules={{
												required: 'Изображение обязательное поле!',
											}}
										/>
									</div>
									<ManageProductService
										control={control}
										variationIndex={index}
										unregister={unregister}
									/>
								</div>
								{fields.length > 1 && (
									<Button
										className={styles.button}
										variant="light"
										type="button"
										onClick={() => remove(index)}
									>
										<Icon name="XCircle" />
										Удалить вариацию
									</Button>
								)}
							</div>
						))}
					</div>
				)}
				<Button
					className={cn(styles.button, styles.margin)}
					variant="light"
					type="button"
					onClick={() =>
						append({
							class: '',
							sku: '',
							image: '',
							price: 0,
							boughtTimes: generateRandomNumber(2000, 5000, 'number'),
							composition: '',
							information: '',
							shortDescription: '',
							rating: generateRandomNumber(4.9, 5, 'float'),
						})
					}
				>
					<Icon name="PlusCircle" />
					Добавить вариацию
				</Button>
			</div>
		</>
	)
}

export default ManageProductVariations
