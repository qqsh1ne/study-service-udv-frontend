import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store.ts';

const SERVER_URL = 'http://51.250.93.76:3000/';

const baseQuery = fetchBaseQuery({
	baseUrl: SERVER_URL,
	prepareHeaders(headers, { getState }) {
		const token =
			(getState() as RootState).auth.authData?.access_token ||
			localStorage.getItem('access_token');
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
	}
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({})
});
