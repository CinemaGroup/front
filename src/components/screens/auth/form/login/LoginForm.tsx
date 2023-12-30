import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import ToggleSwitch from '@/components/ui/form-elements/switch/ToggleSwitch'
import { useActions } from '@/hooks/queries/user/useActions'
import { IAuthLogin } from '@/store/user/interface/user.interface'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from '../../Auth.module.scss'
import { ILoginForm } from './interface/login-form.interface'

const LoginForm: FC<ILoginForm> = ({ next }) => {
	const { login } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<IAuthLogin>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthLogin> = (data) => {
		login(data)

		reset()
	}

	return (
		<div className={styles.fill}>
			<h2 className={styles.title}>Вход</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...formRegister('emailOrLogin', {
						required: 'Введите e-mail или логин',
					})}
					error={errors.emailOrLogin}
					placeholder="е-mail или логин"
				/>
				<Field
					{...formRegister('password', {
						required: 'Введите пароль',
						minLength: {
							value: 6,
							message:
								'Минимальная длина пароля должна быть не менее 6 символов',
						},
					})}
					type="password"
					error={errors.password}
					placeholder="Пароль"
				/>
				<Controller
					name="isRemember"
					defaultValue={false}
					control={control}
					render={({ field: { value, onChange } }) => (
						<ToggleSwitch
							className={styles.toggle}
							value={value}
							onChange={onChange}
						>
							<p className={styles.toggleText}>
								Сохранить пароль для следующей сессии
							</p>
						</ToggleSwitch>
					)}
				/>
				<Button variant="light" className={styles.submit}>
					Войти на платформу
				</Button>
			</form>
			<div className={styles.change}>
				<span>Новый пользователь?</span>{' '}
				<button type="button" onClick={next}>
					Регистрация
				</button>
			</div>
		</div>
	)
}

export default LoginForm
