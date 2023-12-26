import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store.ts';
import { SERVER_URL } from '../const/env.ts';

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
	tagTypes: ['Apps'],
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({})
});
