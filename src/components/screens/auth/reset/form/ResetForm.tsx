'use client'

import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import { useActions } from '@/hooks/queries/user/useActions'
import { useAuthRedirect } from '@/hooks/redirects/useAuthRedirect'
import { IAuthReset } from '@/store/user/interface/user.interface'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from '../../Auth.module.scss'

const ResetForm: FC = () => {
	useAuthRedirect()

	const { resetPassword } = useActions()
	const searchParams = useSearchParams()

	const token = searchParams.get('token') || ''
	const email = searchParams.get('email') || ''

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuthReset>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthReset> = (data) => {
		resetPassword({ ...data, token, email })

		reset()
	}

	return (
		<div className={styles.fill}>
			<h2 className={styles.title}>Сброс пароля</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...formRegister('password', {
						required: 'Пароль обязательное поле',
						minLength: {
							value: 6,
							message:
								'Минимальная длина пароля должна быть не менее 6 символов',
						},
					})}
					placeholder="Новый пароль"
					error={errors.password}
				/>
				<Button variant="light" className={styles.submit}>
					Сохранить
				</Button>
			</form>
		</div>
	)
}

export default ResetForm
