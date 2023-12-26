import { AuthSchema } from '../screens/Login/model/types/authSchema.ts';
import { ApplicationSchema } from '../screens/CreateApplication/model/types/applicationSchema.ts';
import {IApplicationListResponseItem} from "../screens/Home/types/ApplicationList.types.ts";

export interface StateSchema {
	auth: AuthSchema;
	application: ApplicationSchema;
	applicationList: IApplicationListResponseItem[];
}
