import { axiosClassic } from '@/api/api.interceptors'
import { getAuthUrl } from '@/config/api.config'
import { REFRESH_TOKEN, REMEMBER } from '@/constants/auth.constants'
import {
	IAuthLogin,
	IAuthRegister,
	IAuthResponse,
} from '@/store/user/interface/user.interface'
import Cookies from 'js-cookie'
import { saveToSession, saveToStorage } from '../auth.helper'

export const AuthService = {
	async register(data: IAuthRegister) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl(`/register`),
			{
				...data,
			}
		)
		if (response.data.accessToken) {
			response.data.isRemember
				? saveToStorage(response.data, 7)
				: saveToSession(response.data)
		}

		return response.data
	},

	async login(data: IAuthLogin) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl(`/login`),
			{
				...data,
			}
		)
		if (response.data.accessToken) {
			response.data.isRemember
				? saveToStorage(response.data, 7)
				: saveToSession(response.data)
		}

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		const isRemember = JSON.parse(Cookies.get(REMEMBER) || 'true')

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			getAuthUrl('/login/access-token'),
			{ refreshToken, isRemember }
		)

		if (response.data.accessToken) {
			response.data.isRemember
				? saveToStorage(response.data, 7)
				: saveToSession(response.data)
		}

		return response
	},
}
