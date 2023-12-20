import { useEffect } from 'react';
import { useCurrentMutation } from '../../services/authApi.ts';
import { Outlet, Navigate } from 'react-router-dom';
import { Path } from '../../const/path.ts';
export const ProtectedRouter = () => {
	const [currentUser] = useCurrentMutation();
	const token = localStorage.getItem('access_token');
	useEffect(() => {
		token && currentUser({ access_token: token });
	}, []);

	return token ? <Outlet /> : <Navigate to={Path.login} />;
};
