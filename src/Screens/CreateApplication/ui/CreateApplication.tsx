import { FC, useState } from 'react';
import { DatePicker, Form, Input } from 'antd';
import cls from './CreateApplication.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import { useAddMutation } from '../../../services/applicationApi.ts';
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
			await addApplication(application).unwrap();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Layout>
			<Form onFinish={createApplication} className={cls.container}>
				<h1 className={cls.header}>Создание заявки</h1>
				<section className={cls.section}>
					<h2 className={cls.fieldName}>О сотруднике</h2>
					<Form.Item className={cls.inputSection}>
						<div className={cls.inputName}>ФИО (НО СЕЙЧАС EMAIL)</div>
						<CustomInput onChange={(e) => setEmail(e.target.value)} />
					</Form.Item>
				</section>
				<section className={cls.section}>
					<h2 className={cls.fieldName}>Об обучении</h2>
					<Form.Item className={cls.inputSection}>
						<div className={cls.inputName}>Название курса</div>
						<CustomInput onChange={(e) => setCourseName(e.target.value)} />
					</Form.Item>
					<div className={cls.flex}>
						<Form.Item className={cls.inputSection}>
							<div className={cls.inputName}>Стоимость</div>
							<CustomInput onChange={(e) => setCost(Number(e.target.value))} />
						</Form.Item>
						<Form.Item className={cls.inputSection}>
							<div className={cls.inputName}>Сроки обучения</div>
							<RangePicker
								onChange={(_, [startDate, endDate]) => {
									setStartDate(startDate);
									setEndDate(endDate);
								}}
							/>
						</Form.Item>
					</div>
					<Form.Item className={cls.inputSection}>
						<div className={cls.inputName}>Цель обучения</div>
						<CustomInput onChange={(e) => setPoint(e.target.value)} />
					</Form.Item>
				</section>
				<Form.Item className={cls.section}>
					<h2 className={cls.fieldName}>Комментарий</h2>
					<TextArea className={cls.commentField} />
				</Form.Item>
				<CustomButton width={156} className='medium'>
					Отправить
				</CustomButton>
			</Form>
		</Layout>
	);
};

export default CreateApplication;
