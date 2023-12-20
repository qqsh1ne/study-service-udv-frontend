import { FC } from 'react';
import { DatePicker, Input } from 'antd';
import cls from './CreateApplication.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
const { RangePicker } = DatePicker;

const CreateApplication: FC = () => {
	return (
		<Layout>
			<div className={cls.container}>
				<div className={cls.header}>Заявка # 2281337</div>
				<div className={cls.section}>
					<div className={cls.fieldName}>О сотруднике</div>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>ФИО</div>
						<Input />
					</div>
				</div>
				<div className={cls.section}>
					<div className={cls.fieldName}>Об обучении</div>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>Название курса</div>
						<Input />
					</div>
					<div className={cls.flex}>
						<div className={cls.inputSection}>
							<div className={cls.inputName}>Стоимость</div>
							<Input size='middle' />
						</div>
						<div className={cls.inputSection}>
							<div className={cls.inputName}>Сроки обучения</div>
							<RangePicker />
						</div>
					</div>
					<div className={cls.inputSection}>
						<div className={cls.inputName}>Цель обучения</div>
						<Input />
					</div>
				</div>
				<div className={cls.section}>
					<div className={cls.fieldName}>Комментарий</div>
					<textarea />
				</div>
				<CustomButton width={156} className='medium'>
					Отправить
				</CustomButton>
			</div>
		</Layout>
	);
};

export default CreateApplication;
