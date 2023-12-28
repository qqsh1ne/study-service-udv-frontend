import { useEffect } from 'react';
import { useCurrentMutation } from '../../services/authApi.ts';
import { Outlet, Navigate } from 'react-router-dom';
import { Path } from '../../const/path.ts';
import {useGetApplicationListMutation} from "../../services/applicationApi.ts";

export const ProtectedRouter = () => {
	const [currentUser] = useCurrentMutation();
	const [getApplicationList] = useGetApplicationListMutation();
	const token = localStorage.getItem('access_token');
	useEffect(() => {
		token && currentUser({ access_token: token });
		getApplicationList({
			access_token: localStorage.getItem('access_token'),
			limit: 100,
		})
	}, []);

	return token ? <Outlet /> : <Navigate to={Path.login} />;
};
