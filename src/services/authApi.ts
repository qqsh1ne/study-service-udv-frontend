import { api } from './api.ts';
import { UserSchema } from '../screens/Login/model/types/authSchema.ts';

interface ResponseSchema {
	response: UserSchema;
}

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ResponseSchema, UserSchema>({
			query: (userData) => ({
				url: '/api/login',
				method: 'POST',
				body: userData
			})
		}),
		register: builder.mutation<ResponseSchema, UserSchema>({
			query: (userData) => ({
				url: '/api/register',
				method: 'POST',
				body: userData
			})
		}),
		current: builder.mutation<ResponseSchema, { access_token: string }>({
			query: (token) => ({
				url: '/api/profile',
				method: 'POST',
				body: token
			})
		})
	})
});

export const { useLoginMutation, useRegisterMutation, useCurrentMutation } =
	authApi;

export const {
	endpoints: { login, register, current }
} = authApi;
