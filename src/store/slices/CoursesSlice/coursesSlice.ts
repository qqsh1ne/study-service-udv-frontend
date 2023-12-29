import { createSlice } from '@reduxjs/toolkit';
import { coursesApi } from '../../../services/coursesApi.ts';
import { CoursesSchema } from './coursesSchema.ts';

const initialState: CoursesSchema = {
	coursesData: []
};

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			coursesApi.endpoints.courses.matchFulfilled,
			(state, action) => {
				state.coursesData = action.payload.response;
			}
		);
	}
});

export const { actions: coursesActions } = coursesSlice;
export const { reducer: coursesReducer } = coursesSlice;
