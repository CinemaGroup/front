import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import { useActions } from '@/hooks/queries/user/useActions'
import { IAuthForgot } from '@/store/user/interface/user.interface'
import { validEmail } from '@/utils/validations/validate-email'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from '../../Auth.module.scss'
import { IForgotForm } from './interface/forgot-form.interface'

const forgotForm: FC<IForgotForm> = ({ gotTo }) => {
	const [isLoading, setIsLoading] = useState(false)
	const { forgotPassword } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuthForgot>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthForgot> = (data) => {
		setIsLoading(true)
		forgotPassword(data)

		reset()
	}

	return (
		<div className={styles.fill}>
			<h2 className={styles.title}>Восстановление пароля</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...formRegister('email', {
						required: 'Email обязательное поле',
						pattern: {
							value: validEmail,
							message: 'Пожалуйста, введите корректный email',
						},
					})}
					error={errors.email}
					placeholder="Введите ваш E-mail"
				/>
				<Button variant="light" className={styles.submit} disabled={isLoading}>
					Отправить
				</Button>
			</form>
			<div className={styles.change}>
				<span>Уже есть аккаунт?</span>{' '}
				<button type="button" onClick={gotTo}>
					Назад
				</button>
			</div>
		</div>
	)
}

export default forgotForm
