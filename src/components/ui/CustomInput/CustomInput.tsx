import { Form, Input } from 'antd';
import cls from './CustomInput.module.scss';

type CustomInputProps = {
	name?: string;
	placeholder?: string;
	type?: string;
	onChange?: (params: any) => void;
};
export const CustomInput = ({
	name,
	placeholder,
	type = 'text',
	onChange
}: CustomInputProps) => {
	return (
		<Form.Item
			name={name}
			rules={[{ required: true, message: 'Обязательное поле' }]}
			shouldUpdate={true}
			style={{
				margin: 0,
				padding: 0
			}}
		>
			<Input
				placeholder={placeholder}
				type={type}
				size='middle'
				className={cls.customInput}
				onChange={onChange}
			/>
		</Form.Item>
	);
};

export default CustomInput;
