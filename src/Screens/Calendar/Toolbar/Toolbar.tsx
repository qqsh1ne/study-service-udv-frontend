import { FC } from 'react';
import cls from './Toolbar.module.scss';
import { Navigate, ToolbarProps } from 'react-big-calendar';
import pointerLeft from '../../../assets/pointer-left.svg';
import pointerRight from '../../../assets/pointer-right.svg';

const Toolbar: FC<ToolbarProps> = (props) => {
	const { label } = props;
	const onNext = () => {
		props.onNavigate(Navigate.NEXT);
	};
	const onPrev = () => {
		props.onNavigate(Navigate.PREVIOUS);
	};

	return (
		<div className={cls.toolbarWrapper}>
			<div className={cls.label}>{label}</div>
			<div className={cls.buttons}>
				<button className={cls.button} onClick={onPrev}>
					<img src={pointerRight} alt='prev' />
				</button>
				<button className={cls.button} onClick={onNext}>
					<img src={pointerLeft} alt='next' />
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
