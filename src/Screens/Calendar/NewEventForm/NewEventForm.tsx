import { FC, useState } from 'react';
import { Form, Modal, DatePicker } from 'antd';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import styles from './NewEventForm.module.scss';
import CustomButton from '../../../components/ui/CustomButton/CustomButton.tsx';
const { RangePicker } = DatePicker;

interface NewEventProps {
	onName: (e: any) => void;
	onDate: (startDate: Date, endDate: Date) => void;
	onFinish: () => void;
}

const NewEventForm: FC<NewEventProps> = ({ onDate, onName, onFinish }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
						<CustomInput onChange={onName} />
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
