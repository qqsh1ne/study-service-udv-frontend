import { StateSchema } from '../../../../store/StateSchema.ts';

export const getEmailSelector = (state: StateSchema) =>
	state.auth.authData?.email;
export const getPasswordSelector = (state: StateSchema) =>
	state.auth.authData?.password;

export const isAuthSelector = (state: StateSchema) => state.auth.isAuth;
