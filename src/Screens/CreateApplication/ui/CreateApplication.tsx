import { FC, useState } from 'react';
import { DatePicker, Form, Input } from 'antd';
import cls from './CreateApplication.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import { useAddMutation } from '../../../services/applicationApi.ts';
import { useAppDispatch } from '../../../hooks/hooks.ts';
import { applicationActions } from '../model/slices/applicationSlice.ts';
import ApplicationConfirmation from '../ApplicationConfirm/ui/ApplicationConfirm.tsx';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateApplication: FC = () => {
	const [addApplication] = useAddMutation();
	const [email, setEmail] = useState('');
	const [courseName, setCourseName] = useState('');
	const [cost, setCost] = useState(0);
	const [point, setPoint] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [isConfirm, setIsConfirm] = useState(false);
	const dispatch = useAppDispatch();

	const application = {
		course_name: courseName,
		cost: cost,
		point: point,
		student_email: email,
		start_date: startDate,
		end_date: endDate,
		access_token: localStorage.getItem('access_token')
	};

	const createApplication = async () => {
		try {
			dispatch(applicationActions.createApplication(application));
			await addApplication(application);
			setIsConfirm(true);
		} catch (e) {
			console.log('her');
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const rangeConfig = {
		rules: [
			{
				type: 'array' as const,
				required: true,
				message: 'Укажите даты отпуска'
			}
		]
	};

	return !isConfirm ? (
		<Layout>
			<Form
				onFinish={createApplication}
				className={cls.container}
				autoComplete='off'
				onFinishFailed={onFinishFailed}
			>
				<h1 className={cls.header}>Создание заявки</h1>
				<section className={cls.section}>
					<h2 className={cls.fieldName}>О сотруднике</h2>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>ФИО</div>
						<CustomInput name='UserName' />
					</div>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>Email</div>
						<CustomInput
							name='Email'
							type='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</section>
				<section className={cls.section}>
					<h2 className={cls.fieldName}>Об обучении</h2>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>Название курса</div>
						<CustomInput
							name='CourseName'
							onChange={(e) => setCourseName(e.target.value)}
						/>
					</div>
					<div className={cls.flex}>
						<div className={cls.inputSection}>
							<div className={cls.inputName}>Стоимость</div>
							<CustomInput
								name='Cost'
								onChange={(e) => setCost(Number(e.target.value))}
							/>
						</div>
						<div className={cls.inputSection}>
							<div className={cls.inputName}>Сроки обучения</div>
							<Form.Item name='Dates' {...rangeConfig}>
								<RangePicker
									onChange={(_, [startDate, endDate]) => {
										setStartDate(startDate);
										setEndDate(endDate);
									}}
								/>
							</Form.Item>
						</div>
					</div>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>Цель обучения</div>
						<CustomInput
							name='Point'
							onChange={(e) => setPoint(e.target.value)}
						/>
					</div>
				</section>
				<Form.Item className={cls.section} name='Comment'>
					<h2 className={cls.fieldName}>Комментарий</h2>
					<TextArea className={cls.commentField} />
				</Form.Item>
				<CustomButton width={156} className='medium'>
					Отправить
				</CustomButton>
			</Form>
		</Layout>
	) : (
		<ApplicationConfirmation />
	);
};

export default CreateApplication;
