import cls from './Button.module.scss';
import { FC } from 'react';

interface IButton {
	children: string;
	className: string;
	width: number;
}

const Button: FC<IButton> = ({ children, className, width }) => {
	return (
		<div>
			<button
				style={{ width: width }}
				className={`${cls[className]} ${cls.myButton}`}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
