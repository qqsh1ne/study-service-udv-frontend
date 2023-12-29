import { Checkbox, Form, Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './Login.module.scss';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import { UserSchema } from '../model/types/authSchema.ts';
import { useLoginMutation } from '../../../services/authApi.ts';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage.tsx';
import { useDebounce } from '../../../hooks/useDebounce.ts';
import { Gradient } from '../../../components/Gradient/Gradient.tsx';

// testuser@test.com
// qwerty123

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
			await loginUser(data).then((response) => {
				// @ts-ignore
				setError(response.data.error);
			});
		} catch (e) {
			setError('Неизвестная ошибка');
		}
	};

	useEffect(() => {
		token && navigate('/');
	}, [login]);

	const debouncedLogin = useDebounce(login, 1000);
	return (
		<div className={styles.content}>
			<div className={styles.gradient}>
				<Gradient />
			</div>
			<Form onFinish={debouncedLogin} className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.header}>Авторизация</div>
					<Form.Item className={styles.input}>
						<div className={styles.inputType}>Email</div>
						<CustomInput
							name='Email'
							type='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Item>
					<div className={styles.input}>
						<div className={styles.inputType}>Пароль</div>
						<Form.Item
							name='password'
							rules={[{ required: true, message: 'Обязательное поле' }]}
						>
							<Input.Password
								type='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Item>
					</div>
					<div className={styles.pass}>
						<div className={styles.checkbox}>
							<Checkbox />
							<div>Запомнить</div>
						</div>
						<div>Забыли пароль?</div>
					</div>
					<Form.Item>
						<CustomButton className='medium' width='100%'>
							Войти
						</CustomButton>
					</Form.Item>
					<ErrorMessage message={error} />
				</div>
			</Form>
		</div>
	);
};

export default Login;
