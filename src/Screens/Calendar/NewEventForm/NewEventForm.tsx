import { FC, useState } from 'react';
import { Button, Form, Modal, DatePicker } from 'antd';
import CustomInput from '../../../components/ui/CustomInput/CustomInput.tsx';
import styles from './NewEventForm.module.scss';
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
			<Button onClick={showModal}>Добавить событие</Button>
			<Modal
				width={400}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={() => (
					<Form.Item>
						<Button onClick={handleOk}>Добавить</Button>
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
