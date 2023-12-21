import { Checkbox, Form } from 'antd';
import { FC, useEffect, useState } from 'react';
import cls from './Login.module.scss';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import { UserSchema } from '../model/types/authSchema.ts';
import { useLoginMutation } from '../../../services/authApi.ts';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage.tsx';
import { useDebounce } from '../../../hooks/useDebounce.ts';

// testuser@test.com
// qwerty123

type FieldType = {
	email: string;
	password: string;
};

const Login: FC = () => {
	const navigate: NavigateFunction = useNavigate();
	const [loginUser] = useLoginMutation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const token = localStorage.getItem('access_token');
	const login = async () => {
		const data: UserSchema = { email: email, password: password };
		try {
			await loginUser(data).unwrap();
		} catch (e) {
			setError('Неизвестная ошибка');
		}
	};

	useEffect(() => {
		token && navigate('/');
	}, [login]);

	const debouncedLogin = useDebounce(login, 1000);
	return (
		<Form onFinish={debouncedLogin} className={cls.wrapper}>
			<div className={cls.container}>
				<div className={cls.header}>Авторизация</div>
				<Form.Item<FieldType> className={cls.input}>
					<div className={cls.inputType}>Email</div>
					<CustomInput
						type='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Item>
				<Form.Item<FieldType> className={cls.input}>
					<div className={cls.inputType}>Пароль</div>
					<CustomInput
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Item>
				<div className={cls.pass}>
					<div className={cls.checkbox}>
						<Checkbox />
						<div>Запомнить</div>
					</div>
					<div>Забыли пароль?</div>
				</div>
				<Form.Item<FieldType>>
					<CustomButton className='medium' width='100%'>
						Войти
					</CustomButton>
				</Form.Item>
				<ErrorMessage message={error} />
			</div>
		</Form>
	);
};

export default Login;
