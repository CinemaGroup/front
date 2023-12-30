import { errorCatch } from '@/api/api.helpers'
import { getAuthUrl } from '@/config/api.config'
import { PROVIDER } from '@/constants/auth.constants'
import {
	removeFromSession,
	removeFromStorage,
} from '@/services/auth/auth.helper'
import { GoogleAuthService } from '@/services/auth/google/google-auth.service'
import { AuthService } from '@/services/auth/jwt/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import {
	IAuthLogin,
	IAuthRegister,
	IAuthResponse,
} from './interface/user.interface'

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
