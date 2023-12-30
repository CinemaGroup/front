'use client'

import { GoogleAuthService } from '@/services/auth/google/google-auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect } from 'react'

const GoogleAuth: FC = () => {
	const searchParams = useSearchParams()

	const queryCode = searchParams.get('code')

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['send code token'],
		mutationFn: (code: string) => GoogleAuthService.loginGoogle(code),
		async onSuccess() {
			push('/')
		},
	})

	useEffect(() => {
		if (queryCode) mutate(String(queryCode))
	}, [queryCode, mutate])

	return ''
}

export default GoogleAuth
