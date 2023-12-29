import { api } from './api.ts';

interface GetCoursesResponse {
	response: string[];
}

interface GetCoursesArg {
	access_token: string | null;
	like?: string;
}

export const coursesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		courses: builder.mutation<GetCoursesResponse, GetCoursesArg>({
			query: (args) => ({
				url: '/api/courses/names',
				method: 'POST',
				body: args
			})
		})
	})
});

export const { useCoursesMutation } = coursesApi;
export const {
	endpoints: { courses }
} = coursesApi;
