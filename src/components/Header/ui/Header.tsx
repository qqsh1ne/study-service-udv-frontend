import cls from './Header.module.scss'

const Header = () => {
	return (
		<div className={cls.container}>
			<nav className={cls.nav}>
				<div>ЛОГОТИП</div>
				<div style={{ display: 'flex', gap: 62 }}>
					<div>Главная</div>
					<div>Таблица</div>
					<div>Календарь</div>
				</div>
				<div>Создать заявку</div>
				<div style={{ display: 'flex', gap: 48 }}>
					<div>звоночек</div>
					<div>аватарка</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
