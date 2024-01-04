import { AuthProvider } from '@/services/auth/types/auth.types'
import { IUser } from '@/shared/interfaces/user.interface'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IAuthLogin {
	emailOrLogin: string
	password: string
	isRemember: boolean
}

export interface IAuthRegister {
	login: string
	email: string
	password: string
	isRemember: boolean
	isVerified: boolean
}

export interface IAuthForgot {
	email: string
}

export interface IAuthReset {
	token: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
	isRemember: boolean
	provider: AuthProvider
}
