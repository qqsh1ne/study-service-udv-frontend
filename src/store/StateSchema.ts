import { AuthSchema } from '../screens/Login/model/types/authSchema.ts';
import { ApplicationSchema } from '../screens/CreateApplication/model/types/applicationSchema.ts';

export interface StateSchema {
	auth: AuthSchema;
	application: ApplicationSchema;
}
