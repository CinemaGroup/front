import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import Icon from '@/components/ui/icon/Icon'
import cn from 'classnames'
import { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { IManageProductAboutItems } from '../../interface/variations.interface'
import styles from '../ManageProductAbout.module.scss'

const ManageProductAboutItems: FC<IManageProductAboutItems> = ({
	control,
	aboutIndex,
}) => {
	const { fields, remove, append } = useFieldArray({
		control,
		name: `about.${aboutIndex}.items`,
	})

	return (
		<>
			{fields.map((field, index) => (
				<div key={index} className={styles.aboutItems}>
					<h3 className={styles.subtitle}>Блок {index + 1}</h3>
					<div className={styles.aboutFill}>
						<Controller
							name={`about.${aboutIndex}.items.${index}.title`}
							control={control}
							defaultValue={''}
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
							name={`about.${aboutIndex}.items.${index}.description`}
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
							<Icon name="XCircle" />
							Удалить Блок
						</Button>
					)}
				</div>
			))}
			<Button
				className={cn(styles.button, styles.margin)}
				variant="light"
				type="button"
				onClick={() =>
					append({
						title: '',
						description: '',
					})
				}
			>
				<Icon name="PlusCircle" />
				Добавить Блок
			</Button>
		</>
	)
}

export default ManageProductAboutItems
