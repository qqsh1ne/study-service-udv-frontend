import { InterfaceData } from '../../../../types/InterfaceData.ts';

export interface IApplication extends InterfaceData {
	id?: number;
	course_name?: string;
	student_email?: string;
	cost?: number;
	start_date?: string;
	end_date?: string;
	point?: string;
	status?: string;
	changer?: string;
	change_date?: string;
}

export interface ApplicationSchema {
	applicationData: IApplication;
}
