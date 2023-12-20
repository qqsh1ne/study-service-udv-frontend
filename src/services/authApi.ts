import { api } from './api.ts';
import { User } from '../screens/Login/model/types/authSchema.ts';

interface AuthResult {
	response: {
		email: string;
		access_token: string;
	};
}
interface UserSchema {
	response: {
		first_name?: string;
		second_name?: string;
		middle_name?: string;
		email?: string;
		access_token?: string;
	};
}
export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<AuthResult, User>({
			query: (userData) => ({
				url: '/api/login',
				method: 'POST',
				body: userData
			})
		}),
		register: builder.mutation<AuthResult, UserSchema>({
			query: (userData) => ({
				url: '/api/register',
				method: 'POST',
				body: userData
			})
		}),
		current: builder.mutation<UserSchema, { access_token: string }>({
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
