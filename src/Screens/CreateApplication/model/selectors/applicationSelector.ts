import { StateSchema } from '../../../../store/StateSchema.ts';

export const getApplicationId = (state: StateSchema) =>
	state.application.applicationData.id;
export const getNewApplication = (state: StateSchema) =>
	state.application.applicationData;
