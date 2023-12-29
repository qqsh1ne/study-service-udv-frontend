import { FC, useState } from 'react';
import { Form, Modal, DatePicker, Select } from 'antd';
import styles from './NewEventForm.module.scss';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
import { useAppSelector } from '../../../hooks/hooks.ts';
import { getCourses } from '../../../store/selectors/coursesSelector.ts';
const { RangePicker } = DatePicker;

interface NewEventProps {
	onName: (value: string) => void;
	onDate: (startDate: Date, endDate: Date) => void;
	onFinish: () => void;
}

interface CoursesSchema {
	value: string;
	label: string;
}

const NewEventForm: FC<NewEventProps> = ({ onDate, onName, onFinish }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// @ts-ignore
	const courses = useAppSelector(getCourses);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		onFinish();

		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const filterOption = (
		input: string,
		option?: { label: string; value: string }
	) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	const coursesList: CoursesSchema[] = [];
	courses.forEach((course) => {
		coursesList.push({ value: course, label: course });
	});

	return (
		<>
			<CustomButton
				onClick={showModal}
				width={200}
				bgColor='#D9D9D9'
				color='#000000'
			>
				Добавить событие
			</CustomButton>
			<Modal
				width={330}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={() => (
					<Form.Item className={styles.addButton}>
						<CustomButton
							width={100}
							className='small'
							color='#000000'
							bgColor='#D9D9D9'
							onClick={handleOk}
						>
							Добавить
						</CustomButton>
					</Form.Item>
				)}
			>
				<Form className={styles.content}>
					<h1 className={styles.header}>События</h1>
					<div className={styles.inputGroup}>
						<p className={styles.inputName}>Название</p>
						<Select
							showSearch
							style={{ width: '100%' }}
							optionFilterProp='children'
							onChange={(value: string) => onName(value)}
							filterOption={filterOption}
							options={coursesList}
						/>
					</div>
					<div className={styles.inputGroup}>
						<p className={styles.inputName}>Дата</p>
						<RangePicker
							onChange={(_, [startDate, endDate]) => {
								onDate(new Date(startDate), new Date(endDate));
							}}
						/>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default NewEventForm;
