import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import ToggleSwitch from '@/components/ui/form-elements/switch/ToggleSwitch'
import { useActions } from '@/hooks/queries/user/useActions'
import { IAuthRegister } from '@/store/user/interface/user.interface'
import { validEmail } from '@/utils/validations/validate-email'
import Link from 'next/link'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from '../../Auth.module.scss'
import { IRegisterForm } from './interface/register-form.interface'

const RegisterForm: FC<IRegisterForm> = ({ prev }) => {
	const { register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<IAuthRegister>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthRegister> = (data) => {
		register(data)

		reset()
	}

	return (
		<div className={styles.fill}>
			<h2 className={styles.title}>Регистрация</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...formRegister('login', {
						required: 'Логин обязательное поле',
						minLength: {
							value: 5,
							message:
								'Минимальная длина логина должна быть не менее 5 символов',
						},
					})}
					placeholder="Логин"
					error={errors.login}
				/>
				<Field
					{...formRegister('email', {
						required: 'Email обязательное поле',
						pattern: {
							value: validEmail,
							message: 'Пожалуйста, введите корректный email',
						},
					})}
					error={errors.email}
					placeholder="E-mail"
				/>
				<Field
					{...formRegister('password', {
						required: 'Пароль обязательное поле',
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
					name="isVerified"
					defaultValue={false}
					control={control}
					render={({ field: { value, onChange } }) => (
						<ToggleSwitch
							value={value}
							onChange={onChange}
							error={errors.isVerified}
							className={styles.toggle}
						>
							<p className={styles.toggleText}>
								Согласен с <Link href={''}>условиями работы сайта</Link> и
								обработкой персональных данных
							</p>
						</ToggleSwitch>
					)}
					rules={{
						validate: (value) => value === true || 'Согласие обязательно',
					}}
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
					Зарегистрироваться
				</Button>
			</form>
			<div className={styles.change}>
				<span>Уже есть аккаунт?</span>{' '}
				<button type="button" onClick={prev}>
					Войти
				</button>
			</div>
		</div>
	)
}

export default RegisterForm
