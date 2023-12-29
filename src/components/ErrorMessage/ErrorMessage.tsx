import { Alert } from 'antd';

type Props = {
	message?: string;
	className?: string;
};

export const ErrorMessage = ({ message, className }: Props) => {
	if (!message) {
		return null;
	}

	return <Alert className={className} message={message} type='error' />;
};
