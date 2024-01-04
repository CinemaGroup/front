'use client'

import { useMultiStepForm } from '@/hooks/custom-hooks/form/useMultiStepForm'
import { useAuthRedirect } from '@/hooks/redirects/useAuthRedirect'
import { FC } from 'react'
import ForgotForm from './forgot/ForgotForm'
import LoginForm from './login/LoginForm'
import RegisterForm from './register/RegisterForm'

const AuthForm: FC = () => {
	useAuthRedirect()

	const { step, next, prev, goTo, currentIndex } = useMultiStepForm([
		<LoginForm next={() => next()} goTo={() => goTo(2)} />,
		<RegisterForm prev={() => prev()} />,
		<ForgotForm gotTo={() => goTo(0)} />,
	])

	return step
}

export default AuthForm
