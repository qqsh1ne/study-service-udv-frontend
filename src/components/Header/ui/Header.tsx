import cls from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import notification from '../../../assets/notification.svg';
import people from '../../../assets/people.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { Path } from '../../../const/path.ts';
import Layout from '../../Layout/ui/Layout.tsx';
import { useAppDispatch } from '../../../hooks/hooks.ts';
import { authActions } from '../../../screens/Login/model/slices/authSlice.ts';
const Header = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const logout = () => {
		dispatch(authActions.logout());
		localStorage.removeItem('access_token');
	};

	return !location.pathname.includes('login') ? (
		<div className={cls.container}>
			<Layout>
				<nav className={cls.nav}>
					<div className={cls.logo}>
						<img src={logo} alt='logo' />
					</div>
					<div className={cls.menu}>
						<NavLink to={Path.home}>Главная</NavLink>
						<NavLink to={Path.table}>Таблица</NavLink>
						<NavLink to={Path.calendar}>Календарь</NavLink>
					</div>
					<div className={cls.applicationContainer}>
						<NavLink to={Path.application}>
							<div className={cls.application}>Создать заявку</div>
						</NavLink>
					</div>
					<div className={cls.secondMenu}>
						<a>
							<img src={notification} alt='notifications' />
						</a>
						<NavLink to={Path.login} onClick={logout}>
							<img src={people} alt='people' />
						</NavLink>
					</div>
				</nav>
			</Layout>
		</div>
	) : (
		<></>
	);
};

export default Header;
