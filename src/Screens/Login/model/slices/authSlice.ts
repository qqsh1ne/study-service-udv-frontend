import { createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/authSchema.ts';
import { authApi } from '../../../../services/authApi.ts';

const initialState: AuthSchema = {
	authData: undefined,
	isAuth: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
				state.isAuth = true;
				state.authData = action.payload.response;
			})
			.addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
				state.isAuth = true;
				state.authData = action.payload.response;
			});
	}
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
