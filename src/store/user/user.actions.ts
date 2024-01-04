import { errorCatch } from '@/api/api.helpers'
import { getAuthUrl } from '@/config/api.config'
import { PROVIDER } from '@/constants/auth.constants'
import {
	removeFromSession,
	removeFromStorage,
} from '@/services/auth/auth.helper'
import { GoogleAuthService } from '@/services/auth/google/google-auth.service'
import { AuthService } from '@/services/auth/jwt/auth.service'
import { toastError } from '@/utils/custom-utils/toast-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import {
	IAuthForgot,
	IAuthLogin,
	IAuthRegister,
	IAuthReset,
	IAuthResponse,
} from './interface/user.interface'

export const forgotPassword = createAsyncThunk<IAuthResponse, IAuthForgot>(
	getAuthUrl('/forgot'),
	async (data, thunkApi) => {
		try {
			const response = await AuthService.forgot(data)
			toast.success('Проверьте почту.')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const resetPassword = createAsyncThunk<IAuthResponse, IAuthReset>(
	getAuthUrl('/reset'),
	async (data, thunkApi) => {
		try {
			const response = await AuthService.reset(data)
			toast.success('Пароль успешно обновлен')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk<IAuthResponse, IAuthRegister>(
	getAuthUrl('/register'),
	async (data, thunkApi) => {
		try {
			const response = await AuthService.register(data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IAuthLogin>(
	getAuthUrl('/login'),
	async (data, thunkApi) => {
		try {
			const response = await AuthService.login(data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(getAuthUrl('/logout'), async () => {
	removeFromStorage()
	removeFromSession()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	getAuthUrl('/check-auth'),
	async (_, thunkApi) => {
		try {
			const provider = Cookies.get(PROVIDER)
			if (provider === 'google') {
				const response = await GoogleAuthService.getNewTokens()
				return response.data
			} else {
				const response = await AuthService.getNewTokens()
				return response.data
			}
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
