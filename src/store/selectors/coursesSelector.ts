import { StateSchema } from '../StateSchema.ts';

export const getCourses = (state: StateSchema) => state.courses?.coursesData;
