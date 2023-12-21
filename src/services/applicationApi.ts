import { api } from './api.ts';
import { IApplication } from '../screens/CreateApplication/model/types/applicationSchema.ts';
interface AddResponseSchema {
	response: {
		application_id: number;
	};
}
export const applicationApi = api.injectEndpoints({
	endpoints: (builder) => ({
		add: builder.mutation<AddResponseSchema, IApplication>({
			query: (application) => ({
				url: '/api/user-applications/add',
				method: 'POST',
				body: application
			})
		})
	})
});

export const { useAddMutation } = applicationApi;

export const {
	endpoints: { add }
} = applicationApi;
