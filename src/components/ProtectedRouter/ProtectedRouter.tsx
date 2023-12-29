import { useEffect } from 'react';
import { useCurrentMutation } from '../../services/authApi.ts';
import { Outlet, Navigate } from 'react-router-dom';
import { Path } from '../../const/path.ts';
import { useGetApplicationListMutation } from '../../services/applicationApi.ts';
import { useCoursesMutation } from '../../services/coursesApi.ts';

export const ProtectedRouter = () => {
	const [getCourseName] = useCoursesMutation();
	const [currentUser] = useCurrentMutation();
	const [getApplicationList] = useGetApplicationListMutation();
	const token = localStorage.getItem('access_token');
	useEffect(() => {
		token && currentUser({ access_token: token });
		getApplicationList({
			access_token: token,
			limit: 100
		});
		getCourseName({ like: '', access_token: token });
	}, []);

	return token ? <Outlet /> : <Navigate to={Path.login} />;
};
