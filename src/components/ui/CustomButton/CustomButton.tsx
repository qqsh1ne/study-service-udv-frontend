import cls from './CustomButton.module.scss';
import { FC } from 'react';
import { Form } from 'antd';

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
			<button
				onClick={onClick}
				style={{ width: width }}
				className={`${cls[className]} ${cls.customButton}`}
			>
				{children}
			</button>
		</Form.Item>
	);
};

export default CustomButton;
