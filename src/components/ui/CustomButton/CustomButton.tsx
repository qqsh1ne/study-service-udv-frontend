import cls from './CustomButton.module.scss';
import { FC } from 'react';
import { Button, Form } from 'antd';

type CustomButtonProps = {
	children: string;
	className?: string;
	width?: number | string;
	onClick?: () => void;
};

const CustomButton: FC<CustomButtonProps> = ({
	children,
	className = 'medium',
	width,
	onClick
}) => {
	return (
		<Form.Item>
			<Button
				htmlType='submit'
				onClick={onClick}
				style={{ width: width }}
				className={`${cls[className]} ${cls.customButton}`}
			>
				{children}
			</Button>
		</Form.Item>
	);
};

export default CustomButton;
