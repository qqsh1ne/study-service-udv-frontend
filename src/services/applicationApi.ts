import { api } from './api.ts';
import { IApplication } from '../screens/CreateApplication/model/types/applicationSchema.ts';
import {IApplicationList, IApplicationListBody} from "../screens/Home/types/ApplicationList.types.ts";
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
		}),
		getApplicationList: builder.mutation<IApplicationList, IApplicationListBody>({
			query: (accessToken) => ({
				url: '/api/applications',
				method: 'POST',
				body: accessToken,
			}),
		}),
	})
});

export const { useAddMutation, useGetApplicationListMutation } = applicationApi;

export const {
	endpoints: { add }
} = applicationApi;
