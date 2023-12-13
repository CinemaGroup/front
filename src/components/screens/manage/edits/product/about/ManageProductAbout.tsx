import Field from '@/components/ui/form-elements/field/Field'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import cn from 'classnames'
import { FC } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { IManageProductControl } from '../interface/variations.interface'
import styles from './ManageProductAbout.module.scss'
import ManageProductAboutItems from './items/ManageProductAboutItems'

const ManageProductAbout: FC<IManageProductControl> = ({ control }) => {
	const { fields, remove, append } = useFieldArray({
		control,
		name: 'about',
	})

	return (
		<div className={styles.aboutWrapper}>
			<SubHeading>Для чего нужен</SubHeading>
			{fields.map((field, index) => (
				<div className={styles.about}>
					<Controller
						name={`about.${index}.title`}
						control={control}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<Field
								className={cn(styles.field, styles.full)}
								onChange={onChange}
								value={value}
								label="Заголовок"
								error={error}
							/>
						)}
						rules={{
							required: 'Заголовок обязательное поле!',
						}}
					/>
					<ManageProductAboutItems control={control} aboutIndex={index} />
				</div>
			))}
		</div>
	)
}

export default ManageProductAbout
