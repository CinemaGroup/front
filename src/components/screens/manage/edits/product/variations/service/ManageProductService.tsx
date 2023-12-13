import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { IManageProductServices } from '../../interface/variations.interface'
import styles from '../ManageProductVariations.module.scss'

const ManageProductService: FC<IManageProductServices> = ({
	control,
	variationIndex,
	unregister,
}) => {
	const { fields, remove, append } = useFieldArray({
		control,
		name: `variations.${variationIndex}.service.items`,
	})

	const [service, setService] = useState(fields.length < 1 ? false : true)

	useEffect(() => {
		if (!service && fields.length < 1) {
			unregister(`variations.${variationIndex}.service`)
		}
	}, [service])

	return (
		<div className={styles.servicesWrapper}>
			<SubHeading>Доп услуги для вариации</SubHeading>
			{!service ? (
				<Button
					className={styles.button}
					variant="light"
					type="button"
					onClick={() => {
						setService(true)
						append({
							title: '',
							price: 0,
						})
					}}
				>
					<MaterialIcon name="MdAddCircleOutline" />
					Добавить услугу
				</Button>
			) : (
				<>
					{fields.length > 0 && (
						<div className={styles.services}>
							<Controller
								name={`variations.${variationIndex}.service.title`}
								defaultValue={''}
								control={control}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<Field
										className={cn(styles.field, styles.full)}
										onChange={onChange}
										value={value}
										label="Текст который описывает услугу"
										error={error}
									/>
								)}
								rules={{
									required: 'Текст который описывает услугу обязательное поле!',
								}}
							/>
							{fields.map((field, index) => (
								<div key={index} className={styles.service}>
									<h3 className={styles.subtitle}>Опция {index + 1}</h3>
									<div className={styles.serviceFill}>
										<Controller
											name={`variations.${variationIndex}.service.items.${index}.title`}
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
													label="Название опции"
													error={error}
												/>
											)}
											rules={{
												required: 'Название опции обязательное поле!',
											}}
										/>
										<Controller
											name={`variations.${variationIndex}.service.items.${index}.price`}
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
													label="Цена опции"
													error={error}
												/>
											)}
											rules={{
												required: 'Цена опции обязательное поле!',
											}}
										/>
									</div>
									<Button
										variant="light"
										className={cn(styles.button, styles.margin)}
										type="button"
										onClick={() => {
											remove(index)
											fields.length === 1 && setService(false)
										}}
									>
										<MaterialIcon name="MdDeleteOutline" />
										Удалить опцию
									</Button>
								</div>
							))}
						</div>
					)}
					<Button
						className={styles.button}
						variant="light"
						type="button"
						onClick={() =>
							append({
								title: '',
								price: 0,
							})
						}
					>
						<MaterialIcon name="MdAddCircleOutline" />
						Добавить опцию
					</Button>
				</>
			)}
		</div>
	)
}

export default ManageProductService
