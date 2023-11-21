import { Input, Checkbox, Button } from 'antd'
import { FC } from 'react'
import cls from './Login.module.scss'

const Login: FC = () => {
	return (
		<div className={cls.wrapper}>
			<div className={cls.container}>
				<h1>Авторизация</h1>
				<div className={cls.inputs}>
					<div>
						Email
						<Input size='large' />
					</div>
					<div>
						Пароль
						<Input size='large' />
					</div>
				</div>
				<div className={cls.pass}>
					<div>
						<Checkbox />
						Запомнить
					</div>
					<div>Забыли пароль?</div>
				</div>
				<div>
					<Button size='large'>Войти</Button>
				</div>
			</div>
		</div>
	)
}

export default Login
