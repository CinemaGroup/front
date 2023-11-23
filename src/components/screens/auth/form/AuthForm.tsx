'use client'

import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import Heading from '@/components/ui/heading/Heading'
import { useActions } from '@/hooks/queries/user/useActions'
import { AuthType } from '@/services/auth/types/auth.types'
import { IAuth } from '@/store/user/interface/user.interface'
import { validEmail } from '@/utils/validations/validate-email'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './AuthForm.module.scss'
import { useAuthRedirect } from '@/hooks/redirects/useAuthRedirect'

const AuthForm: FC = () => {
	useAuthRedirect()
	const { login, register } = useActions()

	const [type, setType] = useState<AuthType>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuth>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<div className={styles.wrapper}>
			<Heading>{type}</Heading>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{type === 'register' && (
					<Field
						{...formRegister('login', {
							required: 'Login is required',
							minLength: {
								value: 5,
								message: 'Min length must be at least 5 characters',
							},
						})}
						placeholder="Login"
						error={errors.login}
					/>
				)}
				<Field
					{...formRegister('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter valid email',
						},
					})}
					error={errors.email}
					placeholder="Email"
				/>
				<Field
					{...formRegister('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length must be at least 6 characters',
						},
					})}
					type="password"
					error={errors.password}
					placeholder="Password"
				/>
				<Button variant="light">{type}</Button>
			</form>
			<button
				type="button"
				className={styles.change}
				onClick={() => setType(type === 'login' ? 'register' : 'login')}
			>
				{type === 'login' ? (
					<>
						Not registered yet? <span>Register</span>
					</>
				) : (
					<>
						Already have an account? <span>Login</span>
					</>
				)}
			</button>
		</div>
	)
}

export default AuthForm
