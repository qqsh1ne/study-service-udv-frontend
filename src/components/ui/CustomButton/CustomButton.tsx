import cls from './CustomButton.module.scss';
import { FC } from 'react';
import { Form } from 'antd';

type CustomButtonProps = {
	children: string;
	className?: string;
	width?: number | string;
	onClick?: () => void;
	bgColor?: string;
	color?: string;
};

const CustomButton: FC<CustomButtonProps> = ({
	children,
	className = 'medium',
	width,
	onClick,
	bgColor,
	color
}) => {
	return (
		<Form.Item>
			<button
				type='submit'
				onClick={onClick}
				style={{ width: width, backgroundColor: bgColor, color: color }}
				className={`${cls[className]} ${cls.customButton}`}
			>
				{children}
			</button>
		</Form.Item>
	);
};

export default CustomButton;
