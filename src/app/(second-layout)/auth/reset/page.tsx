import AuthReset from '@/components/screens/auth/reset/AuthReset'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Auth',
	description: '',
}

export default function AuthPage() {
	return <AuthReset />
}
