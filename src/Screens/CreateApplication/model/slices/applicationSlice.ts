import { ApplicationSchema } from '../types/applicationSchema.ts';
import { createSlice } from '@reduxjs/toolkit';
import { applicationApi } from '../../../../services/applicationApi.ts';

const initialState: ApplicationSchema = {
	applicationData: {}
};

export const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		createApplication: (state, action) => {
			state.applicationData = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			applicationApi.endpoints.add.matchFulfilled,
			(state, action) => {
				state.applicationData.id = action.payload.response.application_id;
			}
		);
	}
});

export const { actions: applicationActions } = applicationSlice;
export const { reducer: applicationReducer } = applicationSlice;
