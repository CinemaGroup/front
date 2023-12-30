import {
	ACCESS_TOKEN,
	PROVIDER,
	REFRESH_TOKEN,
	REMEMBER,
} from '@/constants/auth.constants'
import { IAuthResponse, ITokens } from '@/store/user/interface/user.interface'
import Cookies from 'js-cookie'
import { AuthProvider } from './types/auth.types'

export const getAccessToken = () => {
	const accessToken = Cookies.get(ACCESS_TOKEN)
	return accessToken || null
}

export const getAuthProvider = () => {
	const provider = Cookies.get(PROVIDER)
	return provider || null
}

export const getAuthRemember = () => {
	const isRemember = Cookies.get(REMEMBER)
	return !!isRemember || null
}

export const saveRememberStorage = (isRemember: boolean, expires?: number) => {
	if (expires && expires !== undefined) {
		Cookies.set(REMEMBER, String(isRemember), { expires: expires })
	} else {
		Cookies.set(REMEMBER, String(isRemember))
	}
}

export const saveProviderStorage = (
	provider: AuthProvider,
	expires?: number
) => {
	if (expires && expires !== undefined) {
		Cookies.set(PROVIDER, provider, { expires: expires })
	} else {
		Cookies.set(PROVIDER, provider)
	}
}

export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const getUserFromSession = async () => {
	return JSON.parse(sessionStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens, expires?: number) => {
	if (expires && expires !== undefined) {
		Cookies.set(ACCESS_TOKEN, data.accessToken, { expires: expires })
		Cookies.set(REFRESH_TOKEN, data.refreshToken, { expires: expires })
	} else {
		Cookies.set(ACCESS_TOKEN, data.accessToken)
		Cookies.set(REFRESH_TOKEN, data.refreshToken)
	}
}

export const removeFromStorage = () => {
	Cookies.remove(ACCESS_TOKEN)
	Cookies.remove(REFRESH_TOKEN)
	Cookies.remove(PROVIDER)
	Cookies.remove(REMEMBER)
	localStorage.removeItem('user')
}

export const removeFromSession = () => {
	Cookies.remove(ACCESS_TOKEN)
	Cookies.remove(REFRESH_TOKEN)
	Cookies.remove(PROVIDER)
	Cookies.remove(REMEMBER)
	sessionStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse, expires: number) => {
	saveTokensStorage(data, expires)
	saveProviderStorage(data.provider, expires)
	saveRememberStorage(data.isRemember, expires)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const saveToSession = (data: IAuthResponse) => {
	saveTokensStorage(data)
	saveProviderStorage(data.provider)
	saveRememberStorage(data.isRemember)
	sessionStorage.setItem('user', JSON.stringify(data.user))
}
