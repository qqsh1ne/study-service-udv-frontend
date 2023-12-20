import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../../../../services/authApi.ts';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	matcher: authApi.endpoints.login.matchFulfilled,
	effect: async (action, listenerApi) => {
		listenerApi.cancelActiveListeners();
		if (action.payload.response.access_token) {
			localStorage.setItem(
				'access_token',
				action.payload.response.access_token
			);
		}
	}
});
