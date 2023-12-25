import { Form, Input } from 'antd';

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
			style={{
				margin: 0,
				padding: 0
			}}
		>
			<Input
				placeholder={placeholder}
				type={type}
				size='middle'
				onChange={onChange}
			/>
		</Form.Item>
	);
};

export default CustomInput;
