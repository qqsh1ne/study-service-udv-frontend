import { AuthSchema } from '../screens/Login/model/types/authSchema.ts';
import { ApplicationSchema } from '../screens/CreateApplication/model/types/applicationSchema.ts';
import { IApplicationListResponseItem } from '../screens/Home/types/ApplicationList.types.ts';
import { CoursesSchema } from './slices/CoursesSlice/coursesSchema.ts';
import { IUserProfile } from "../types/userTypes.ts";

export interface StateSchema {
	auth: AuthSchema;
	application: ApplicationSchema;
	applicationList: IApplicationListResponseItem[];
	usersList: IUserProfile[];
	courses: CoursesSchema;
}
