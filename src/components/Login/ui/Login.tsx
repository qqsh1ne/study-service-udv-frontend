import { Input, Checkbox } from 'antd';
import { FC } from 'react';
import cls from './Login.module.scss';
import Button from '../../ui/Button/Button.tsx';

const Login: FC = () => {
	return (
		<div className={cls.wrapper}>
			<div className={cls.container}>
				<div className={cls.header}>Авторизация</div>
				<div className={cls.inputs}>
					<div className={cls.input}>
						<div>Email</div>
						<Input size='large' />
					</div>
					<div className={cls.input}>
						<div>Пароль</div>
						<Input type='password' size='large' />
					</div>
				</div>
				<div className={cls.pass}>
					<div className={cls.checkbox}>
						<div>
							<Checkbox />
						</div>
						<div>Запомнить</div>
					</div>
					<div>Забыли пароль?</div>
				</div>
				<div className={cls.sendButton}>
					<Button className='medium' width={320} children='Войти' />
				</div>
			</div>
		</div>
	);
};

export default Login;
