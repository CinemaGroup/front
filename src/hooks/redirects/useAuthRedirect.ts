import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '../queries/user/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
