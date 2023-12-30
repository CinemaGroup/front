'use client'

import { useMultiStepForm } from '@/hooks/custom-hooks/form/useMultiStepForm'
import { useAuthRedirect } from '@/hooks/redirects/useAuthRedirect'
import { FC } from 'react'
import LoginForm from './login/LoginForm'
import RegisterForm from './register/RegisterForm'

const AuthForm: FC = () => {
	useAuthRedirect()

	const { step, next, prev } = useMultiStepForm([
		<LoginForm next={() => next()} />,
		<RegisterForm prev={() => prev()} />,
	])

	return step
}

export default AuthForm
