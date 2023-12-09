import cls from './Header.module.scss'
import logo from '../../../assets/logo.svg'
import notification from '../../../assets/notification.svg'
import people from '../../../assets/people.svg'
const Header = () => {
	return (
		<div className={cls.container}>
			<nav className={cls.nav}>
				<div className={cls.logo}>
					<img src={logo} />
				</div>
				<div className={cls.menu}>
					<div>Главная</div>
					<div>Таблица</div>
					<div>Календарь</div>
				</div>
				<div className={cls.applicationContainer}>
					<div className={cls.application}>Создать заявку</div>
				</div>
				<div className={cls.secondMenu}>
					<div>
						<img src={notification} />
					</div>
					<div>
						<img src={people} />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
