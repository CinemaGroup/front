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

export interface IAuth {
	login: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
