import { ApplicationSchema } from '../types/applicationSchema.ts';
import { createSlice } from '@reduxjs/toolkit';
import { applicationApi } from '../../../../services/applicationApi.ts';

const initialState: ApplicationSchema = {
	application: {}
};

export const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		createApplication: (state, action) => {
			state.application = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			applicationApi.endpoints.add.matchFulfilled,
			(state, action) => {
				state.application.id = action.payload.response.application_id;
			}
		);
	}
});

export const { actions: applicationActions } = applicationSlice;
export const { reducer: applicationReducer } = applicationSlice;
