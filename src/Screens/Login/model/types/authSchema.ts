export interface User {
	first_name?: string;
	second_name?: string;
	middle_name?: string;
	email?: string;
	password?: string;
	access_token?: string;
}

export interface AuthSchema {
	authData?: User;
	isAuth?: boolean;
}
